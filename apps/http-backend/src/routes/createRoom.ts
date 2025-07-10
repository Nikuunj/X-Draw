import { CreateRoomSchema } from "@repo/common/types";
import { Request, Response, Router } from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import { prismaClient } from "@repo/db/client";

export const createRoomRouter: Router = Router();


createRoomRouter.post('/create-room', authMiddleware, async (req: Request, res: Response) => {
     const verify = CreateRoomSchema.safeParse(req.body);
     if(!verify.success) {
          res.json({
               msg: 'plz pass valid input'
          }).status(422)
          return
     }

     const userId = req.userId ?? "";

     try {
          const room = await prismaClient.room.create({
               data: {
                    slug: verify.data.name,
                    adminId: userId
               }
          })
          res.status(200).json({
               roomId: room.id
          });
     } catch (e) {
          res.status(500).json({
               massege: 'Internal server Error / User not found'
          });
     }
})
