import { Request, Response, Router } from "express";
import { prismaClient } from '@repo/db/client';
import { CrateUserSchema, SignInUserSchema } from "@repo/common/types";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from "@repo/backend-common/config";

export const authRouter: Router = Router();

authRouter.post("/signin", async (req: Request, res: Response) => {
     const verify = SignInUserSchema.safeParse(req.body);
     if(!verify.success) {
          res.status(422).json({
               massege: 'plz pass valid input'
          })
          return
     }

     try {
          const user = await prismaClient.user.findFirst({
               where: {
                    email: verify.data.username
               }
          })

          if(!user) {
               res.status(404).json({
                    massege: 'user not found'
               })
               return;
          }

          const match = bcrypt.compareSync(verify.data.password, user.password);
          if(!match) {
               res.status(403).json({
                    massege: 'Not Authorized'
               })
               return;
          }

          const token = jwt.sign({
               userId : user.id
          }, JWT_SECRET);

          res.json({
               token : `Bearer ${token}`
          })
     } catch (e) {
          res.status(500).json({
               massege: 'somthing broke'
          })
     }
});

authRouter.post('/signup', async (req, res) => {

     const verify = CrateUserSchema.safeParse(req.body);
     if(!verify.success) {
          res.status(422).json({
               massege: 'plz pass valid input'
          })
          return
     }

     try {

          const hashPassword = bcrypt.hashSync(verify.data.password, 5);
          const user = await prismaClient.user.create({
               data: {
                    email: verify.data.username,
                    password: hashPassword,
                    name: verify.data.name
               }
          })
     
          res.json({
               userId: user.id
          });
     } catch (e) {
          res.status(411).json({
               massege: 'User already exist with this username'
          })
     }
})