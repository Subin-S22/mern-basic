import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
// import Profile from "./models/profile";
dotenv.config();
import Profile from "./routes/profile.route";
const app = express();

app.use("/", Profile);
// app.use('/profile', Profile)

const url = process.env.mongodb_url as string;
function main() {
  mongoose.connect(url, () => {
    console.log("connected");
  });
  app.listen(process.env.PORT, () => console.log("server is running"));
  app.get("/", (_, res) => {
    res.send("hello world");
  });
}

main();
