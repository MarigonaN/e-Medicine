const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const cors = require("cors");

const { addUser, removeUser, getUser, getUsersInRoom } = require("./users");

const app = express();
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const server = http.createServer(app);
const io = socketio(server);

app.use(cookieParser());
app.use(express.json());

mongoose.connect(
  "mongodb://localhost:27017/e-Medicine",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("successfully connected to databasee");
  }
);

io.on("connect", (socket) => {
  socket.on("join", ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if (error) return callback(error);

    socket.join(user.room);

    socket.emit("message", {
      user: "admin",
      text: `${user.name}, welcome to room ${user.room}.`,
    });
    socket.broadcast
      .to(user.room)
      .emit("message", { user: "admin", text: `${user.name} has joined!` });

    io.to(user.room).emit("roomData", {
      room: user.room,
      users: getUsersInRoom(user.room),
    });

    callback();
  });

  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit("message", { user: user.name, text: message });

    callback();
  });

  socket.on("disconnect", () => {
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit("message", {
        user: "Admin",
        text: `${user.name} has left.`,
      });
      io.to(user.room).emit("roomData", {
        room: user.room,
        users: getUsersInRoom(user.room),
      });
    }
  });
});

const userRouter = require("./routes/User");
const router = require("./router");
app.use("/user", userRouter);
app.use(cors());
app.use(router);
app.listen(3003, () => {
  console.log("express server started");
});
