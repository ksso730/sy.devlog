import express from "express";
import auth from "../middleware/auth.js";
import { getPost, postPost } from "../controllers/postController.js"

const postRouter = express.Router();

postRouter.get("/:id([0-9a-f]{24})", getPost);
postRouter.post("/upload", auth, postPost);

export default postRouter;