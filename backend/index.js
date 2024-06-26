const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const connectDB = require("./config/db");
const router = require("./routes");

const app = express();
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res)=> {
  return res.send("SERVER IS RUNNING")
})

app.get("/test", (req, res)=> {
  return res.send("This is test route")
})

app.use("/api", router);

const PORT = 8081 || process.env.PORT;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("connect to db");
    console.log("Server is running");
  });
});
