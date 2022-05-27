import express from "express";
import { login, auth } from "../controllers/login.controller";

const routes = express.Router();

routes.post("/", auth, login);

export default routes;
