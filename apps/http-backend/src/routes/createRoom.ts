import { CreateRoomSchema } from "@repo/common/types";
import { Request, Response, Router } from "express";

export const createRoomRouter: Router = Router();


createRoomRouter.post('/create-room', (req: Request, res: Response) => {
     const verify = CreateRoomSchema.safeParse(req.body);
     if(!verify.success) {
          res.json({
               msg: 'plz pass valid input'
          }).status(422)
          return
     }
     res.status(200).json({ status: "create room" });
})
