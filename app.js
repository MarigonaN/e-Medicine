const express = require("express");
const socketio = require("socket.io");

const app = express();

const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

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
