const express = require("express");
const socketio = require("socket.io");
const listEndpoints = require("express-list-endpoints");
const http = require("http");
const cors = require("cors");
require("dotenv").config();
const app = express();
const pass = require("./passport");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const server = http.createServer(app);
const io = socketio(server);

app.use(cookieParser());
app.use(express.json());

const userRouter = require("./routes/User");
const router = require("./router");
app.use("/user", userRouter);
app.use(cors());
console.log(listEndpoints(app));

app.use(router);
mongoose.connect(
  process.env.MONGOHOST,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("successfully connected to databasee");
  }
);
app.listen(process.env.PORT, () => {
  console.log("express server started");
});
