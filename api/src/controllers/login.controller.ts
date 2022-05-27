import { NextFunction, Request, Response } from "express";
import LoginModel from "../models/login.model";

export async function login(req: Request, res: Response) {
  //login
  try {
    if (!req.body.id) return res.status(400).json({ error: "Bad request" });
    const users = await LoginModel.findById(req.body.id);
    // const users = true;
    console.log("users in login", users);
    if (!users)
      return res
        .status(400)
        .json({ message: "Login crendentials is not valid" });
    res.json({ message: "successfully logged in" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  return;
}

export function auth(req: Request, res: Response, next: NextFunction) {
  console.log(req);
  if (req.body.email) next();
  res.status(400).send({ error: "error" });
  return;
}
