import { Request, Response } from "express";

export async function profile(req: Request, res: Response) {
  new Promise((resolve) => {
    res.json(req.body);
    resolve("success");
  });
}
