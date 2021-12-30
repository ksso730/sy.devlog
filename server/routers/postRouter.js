import express from "express";

import { getPost, postPost } from "../controllers/postController.js"

const postRouter = express.Router();

postRouter.get("/:id([0-9a-f]{24})", getPost);
postRouter.post("/upload", postPost);

export default postRouter;