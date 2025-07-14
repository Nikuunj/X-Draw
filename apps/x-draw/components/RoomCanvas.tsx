"use client"
import { useEffect, useState } from "react"
import Canvas from "./Canvas";

function RoomCanvas({ roomId }: { roomId: string }) {

     const [socket, setSocket] = useState<WebSocket | null>(null);

     useEffect(() => {
          if(!roomId) {
               return;
          }
          const token = localStorage.getItem('token') ?? "";
          const jwt = token.split(' ')[1] ?? "";
          const ws = new WebSocket(`ws://localhost:8080?token=${jwt}`)
          
          ws.onopen = () => {
               setSocket(ws);
               const data = JSON.stringify({
                    type: "join_room",
                    roomId
               });
               ws.send(data);
          }

          ws.onclose = () => {
               setSocket(null);
          }
          return () => {
               ws.close();
          };
     }, [roomId])

     if (!socket) {
          return <div>
               Connecting to server....
          </div>
    }

     return (
          <div className="overflow-hidden max-h-screen">
               <Canvas roomId={roomId} socket={socket}/>
          </div>
     )
}

export default RoomCanvas