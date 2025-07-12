import express from "express";
import { authRouter } from "./routes/auth";
import { roomRouter } from "./routes/roomRouter";

const app = express();

app.use(express.json());

app.use('/v1/auth', authRouter)

app.use('/v1/room', roomRouter)

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});