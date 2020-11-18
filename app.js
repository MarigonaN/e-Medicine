const express = require("express");

const app = express();
const PORT = process.env.PORT || 8888;

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
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}
app.listen(PORT, console.log("express server started at port ${PORT}"));
