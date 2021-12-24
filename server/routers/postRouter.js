import express from "express";

import { getPost, postPost } from "../controllers/postController.js"

const router = express.Router();

router.get("/", getPost);
router.post("/", postPost);

export default postRouter;