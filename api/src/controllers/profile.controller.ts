import { Request, Response } from "express";

export async function profile(_: Request, res: Response) {
  new Promise((resolve) => {
    res.json({ success: "success" });
    resolve("success");
  });
}
