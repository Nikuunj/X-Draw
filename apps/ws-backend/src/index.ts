import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });


wss.on("connection", (ws, request) => {
     const url = request.url
     if (!url) {
          ws.close();
          return;
     }
     const queryParams = new URLSearchParams(url.split("?")[1]);
     const token = queryParams.get("token");


     ws.on("message", (message) => { 
          ws.send(`pong`);
     });
});