import express from "express";
import connectDB from "./config/dbconfig.js";

const PORT = 3000;
const app = express(); //create express app server instance.

app.get("/", (req, res) => {
  return res.send("Home");
});

app.get("/ping", (req, res) => {
  return res.json({ message: "pong" });
});

app.post("/hello", (req, res) => {
  console.log("Received Data : ", req.body); //log the received data
  res.json({ message: "Post : hello " });
});

app.get("/hello", (req, res) => {
  res.send("hello world");
});

//starting server
app.listen(PORT, () => {
  console.log("server is running on port : ", PORT);
  connectDB();
});
