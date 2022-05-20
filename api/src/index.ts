import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.listen(process.env.PORT, () => main());

const url = process.env.mongodb_url as string;
function main() {
  mongoose.connect(url, () => {
    console.log("connected", url);
  });
}
