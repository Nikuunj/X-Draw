import express from "express";
import { authRouter } from "./routes/auth";
import { createRoomRouter } from "./routes/createRoom";

const app = express();

app.use(express.json());

app.use('/v1/auth', authRouter);

app.use('/v1/room', createRoomRouter)

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});