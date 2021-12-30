import express from "express";
import { home, getAllPosts } from "../controllers/postController";

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.get("/posts", getAllPosts);

export default rootRouter;