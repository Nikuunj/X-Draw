import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from 'jsonwebtoken';
import { JWT_SECRET  }  from '@repo/backend-common/config'

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
     const tokenStr = req.headers.authorization ?? "" ;

     const token = tokenStr.split(" ")[1] ?? "";

     try {
          const decoded = jwt.verify(token, JWT_SECRET);

          if(typeof decoded == 'string') {
               res.status(401).json({
                    massege: "Unauthorized"
               })
               return
          }

          if (decoded && decoded.userId) {
               req.userId = decoded.userId;
               next();
          } else {
               res.status(401).json({
                    massege: "Unauthorized"
               })
          }
     } catch {
          res.status(401).json({
               massege: "Unauthorized"
          })
     }
}