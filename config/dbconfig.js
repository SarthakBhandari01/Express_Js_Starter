import mongoose from "mongoose";
import { DB_URL } from "./serverConfig.js";

export default async function connectDB() {
  try {
    await mongoose.connect(DB_URL);
    console.log("connected to mongoDB");
  } catch (err) {
    console.log("something went wrong  while connecting to Mongodb");
    console.log(err);
  }
}
