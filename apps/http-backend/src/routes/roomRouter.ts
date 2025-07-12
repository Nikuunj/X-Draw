import { CreateRoomSchema } from "@repo/common/types";
import { Request, Response, Router } from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import { prismaClient } from "@repo/db/client";

export const roomRouter: Router = Router();


roomRouter.post('/create-room', authMiddleware, async (req: Request, res: Response) => {
     const verify = CreateRoomSchema.safeParse(req.body);
     if(!verify.success) {
          res.status(422).json({
               massege: 'plz pass valid input'
          })
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

roomRouter.get('/chat/:roomId', authMiddleware, async (req: Request, res: Response) => {
     const roomId = Number(req.params.roomId);
     const masseges = await prismaClient.chatHistory.findMany({
          where: {
               roomId
          },
          orderBy : {
               id: "desc"
          }, 
          take: 50
     })
     res.json({
          masseges
     })
})

roomRouter.get('/room/:slug', authMiddleware, async (req: Request, res: Response) => {
     const slug = req.params.slug;
     try {


          const room = await prismaClient.room.findFirst({
               where: {
                    slug
               },
          })

          if(!room) {
               res.status(404).json({   
                    massege: 'Room not found'
               })
               return;
          }
          res.json({
               roomId: room.id
          })
     } catch (e) {
          res.status(404).json({
               massege: 'Room not found'
          })
     }
})