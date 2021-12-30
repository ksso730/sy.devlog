import express from "express";
import hpp from "hpp";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";

// Routers
import postRouter from "./routers/postRouter";
import userRouter from "./routers/userRouter";
import rootRouter from "./routers/rootRouter";

const app = express();
const logger = morgan("dev");

// hpp, helmet: 서버의 보안적 측면 보완
app.use(hpp());
app.use(helmet());
// morgan: 로그확인
app.use(logger);
// cors: 브라우저가 다른 도메인/포트 다른 서버에 접속하도록 허용 (origin: true ->모두허용)
app.use(cors({ origin: true, credentials: true }));

// express.json(): request - response 이후 데이터를 받아올때 서버가 그 내용을 해석하도록 요청
app.use(express.json());

// Use router
app.use('/', rootRouter);
app.use("/post", postRouter);
app.use("/user", userRouter);

export default app;