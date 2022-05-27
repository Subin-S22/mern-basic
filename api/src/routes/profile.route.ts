import express from "express";
import { profile } from "../controllers/profile.controller";

const routes = express.Router();

routes.get("/", profile);

export default routes;
