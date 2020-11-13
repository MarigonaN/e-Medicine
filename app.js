const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const app = express();
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const server = http.createServer(app);
const io = socketio(server);
io.on("connection", (socket) => {
  console.log("we have a new connection!!!!!");
  socket.on("disconnect", () => {
    console.log("User had left!!!");
  });
});

app.use(cookieParser());
app.use(express.json());

mongoose.connect(
  "mongodb://localhost:27017/e-Medicine",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("successfully connected to databasee");
  }
);

const userRouter = require("./routes/User");
const router = require("./router");
app.use("/user", userRouter);

app.use(router);
app.listen(3003, () => {
  console.log("express server started");
});
