import { NextFunction, Request, Response } from "express";
import LoginModel from "../models/login.model";

export async function login(req: Request, res: Response) {
  //login
  try {
    // if (!req.body.id) return res.status(400).json({ error: "Bad request" });
    // const users = await LoginModel.findById(req.body.id);
    if (req.body.email === "subin@gmail.com" && req.body.password === "1234") {
      res.status(200).json({ message: "successfully logged in" });
    } else {
      res.status(400).json({ message: "Login crendentials is not valid" });
    }
    // if (!users)
    //   return res
    //     .status(400)
    //     .json({ message: "Login crendentials is not valid" });
    // res.json({ message: "successfully logged in" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export function auth(req: Request, res: Response, next: NextFunction) {
  if (req.body.email && req.body.password) next();
  else res.status(400).send({ message: "Provide valid credentials" });
}
