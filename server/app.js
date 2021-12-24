import express from "express";
import mongoose from "mongoose";
import "dotenv/config"

const app = express();
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
    })
    .then(() => console.log("✅ MongoDB connecting Success!!"))
    .catch((e) => { console.log(e) });
app.get('/');

export default app;