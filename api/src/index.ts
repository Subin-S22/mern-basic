import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
// import Profile from "./models/profile";
dotenv.config({ path: ".env.local" });
import Profile from "./routes/profile.route";
import Login from "./routes/login.route";
const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use("/profile", Profile);
app.use("/login", Login);
// app.use('/profile', Profile)

const url = process.env.mongodb_url as string;
function main() {
  try {
    mongoose.connect(url, () => {
      console.log("connected", url);
    });
  } catch (err) {
    console.log(err);
  }
  app.listen(process.env.PORT, () => console.log("server is running"));
  app.get("/", (_, res) => {
    res.send("hello world");
  });
}

main();
