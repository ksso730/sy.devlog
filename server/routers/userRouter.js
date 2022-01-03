import express from "express";
import { getUser } from "../controllers/userController";

import User from "../models/User"

const userRouter = express.Router();

userRouter.get("/all", getUser);


export default userRouter;