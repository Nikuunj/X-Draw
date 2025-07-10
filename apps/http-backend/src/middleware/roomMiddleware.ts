import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from 'jsonwebtoken';
import { JWT_SECRET  }  from '@repo/backend-common/config'

const roomMiddleware = (req: Request, res: Response, next: NextFunction) => {
     const userId = req.headers.authorization ?? "" ;

     try {
          const decoded = jwt.verify(userId, JWT_SECRET);
     
          if (decoded && (decoded as JwtPayload)) {
               req.userId = decoded.userId;
               next();
          } else {
               res.status(403).json({
                    message: "Unauthorized"
               })
          }
     } catch {
          
     }
}