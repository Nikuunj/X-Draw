import { WebSocket, WebSocketServer } from "ws";
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '@repo/backend-common/config';
import { prismaClient } from '@repo/db/client'
import { createClient } from "redis";

const wss = new WebSocketServer({ port: 8080 });

interface User {
  userId: string;
  ws: WebSocket;
  rooms: string[];
}

const users: User[] = [];

function checkUser(token: string): string | null {
  try {
    const verify = jwt.verify(token, JWT_SECRET)

    if (typeof verify == 'string') {
      return null
    }
    if (!verify || !verify.userId) {
      return null;
    }
    return verify.userId;
  } catch (e) {
    console.error('token varification fail');
    console.error(e)
    return null;
  }
}

const client = createClient();
client.on('error', (err) => console.log('Redis Client Error', err));
async function main() {
  await client.connect();
  console.log('redis connect');

}
main();
wss.on("connection", (ws, request) => {
  const url = request.url
  if (!url) {
    ws.close();
    return;
  }
  const queryParams = new URLSearchParams(url.split("?")[1]);
  const token = queryParams.get("token") || "";

  const userId = checkUser(token);
  if (!userId) {
    ws.close();
    return;
  }

  users.push({
    userId,
    rooms: [],
    ws
  })
  ws.on("message", async (data) => {
    const parsedData = JSON.parse(data as unknown as string);

    if (parsedData.type === 'join_room') {
      const user = users.find(x => x.ws === ws);
      user?.rooms.push(parsedData.roomId);
    }

    if (parsedData.type === 'leave_room') {
      const user = users.find(x => x.ws === ws);
      if (!user) {
        return;
      }
      user.rooms = user?.rooms.filter(x => x !== parsedData.room)
    }

    if (parsedData.type === 'chat') {
      const roomId = parsedData.roomId;
      const massege = parsedData.massege;
      console.log('hi');

      try {
        await client.lPush("problems", "Hi from here");
        // await prismaClient.chatHistory.create({
        //   data: {
        //     roomId,
        //     message: massege,
        //     userId
        //   }
        // })
        //
        users.forEach(user => {
          if (user.userId === userId) {
            return;
          }
          if (user.rooms.includes(roomId)) {
            user.ws.send(JSON.stringify({
              type: 'chat',
              massege: massege,
              roomId
            }));
          }
        })
      }
      catch (e) {
        console.log('error', e);

      }
    }

  });
});
