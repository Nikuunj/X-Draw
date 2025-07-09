import express, { Request, Response } from "express";
import { CrateUserSchema } from '@repo/common/types'

const app = express();

app.use(express.json());

app.post("/signin", (req: Request, res: Response) => {

    const { username, password } = req.body;

    console.log("Received credentials:"),

    res.json({
        msg: "user login"
    })
});

app.post("/signup", (req: Request, res: Response) => {
    const verify = CrateUserSchema.safeParse(req.body);
    if(!verify.success) {
        res.json({
            msg: 'plz pass valid input'
        }).status(422)
        return
    }
    const { username, password } = req.body;
    console.log("Received credentials:", { username, password });

    res.json({
        msg: "user signup"
    });
});

app.post("/create-room", (req, res) => {
    res.status(200).json({ status: "running" });
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});