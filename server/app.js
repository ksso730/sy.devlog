import express from "express";
import mongoose from "mongoose";
import "dotenv/config";

// Routers
import postRouter from "./routers/postRouter";

const app = express();
const MONGO_URI = process.env.MONGO_URI;

// hpp, helmet: 서버의 보안적 측면 보완
app.use(hpp());
app.use(helmet());

// cors: 브라우저가 다른 도메인/포트 다른 서버에 접속하도록 허용 (origin: true ->모두허용)
app.use(cors({ origin: true, credentials: true }));
// morgan: 로그확인
app.use(morgan("dev"));

// express.json(): request - response 이후 데이터를 받아올때 서버가 그 내용을 해석하도록 요청
app.use(express.json());

mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
    })
    .then(() => console.log("✅ MongoDB connecting Success!!"))
    .catch((e) => { console.log(e) });

// Use router
app.get('/');
app.get("/api/post", postRouter);

export default app;