import { Request, Response, Router } from "express";
// import { prismaClient } from '@repo/db/client';
import { CrateUserSchema, SignInUserSchema } from "@repo/common/types";

export const authRouter: Router = Router();

authRouter.post("/signin", async (req: Request, res: Response) => {
     const verify = SignInUserSchema.safeParse(req.body);
     if(!verify.success) {
          res.json({
               msg: 'plz pass valid input'
          }).status(422)
          return
     }

     const { username, password } = req.body;

     console.log("Received credentials:"),

     res.json({
          msg: "user login"
     })
});

authRouter.post('/signup', async (req, res) => {
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
})