import { WebSocketServer } from "ws";
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '@repo/backend-common/config'

const wss = new WebSocketServer({ port: 8080 });

function checkUser(token: string): string | null {
     const verify = jwt.verify(token, JWT_SECRET)

     if(typeof verify == 'string') {
          return null
     }

     if(!verify || !verify.userId) {
          return null;
     }

     return verify.userId;
}
wss.on("connection", (ws, request) => {
     const url = request.url
     if (!url) {
          ws.close();
          return;
     }
     const queryParams = new URLSearchParams(url.split("?")[1]);
     const token = queryParams.get("token") || "";

     const userId = checkUser(token);
     if(!userId) {
          ws.close();
          return;
     }
     ws.on("message", (message) => { 
          ws.send(`pong`);
     });
});