import express from "express";
import { home, getAllPosts } from "../controllers/postController";
import { postUser } from "../controllers/userController";

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.get("/posts", getAllPosts);
rootRouter.post("/login", postUser);

export default rootRouter;