import { Router } from "express";

const authRouter: Router = Router();

authRouter.post("/login", (req, res) => {
     // Handle login logic here
     res.send("Login endpoint");
});

export default authRouter;