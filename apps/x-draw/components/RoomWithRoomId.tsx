"use client"

import { getRoomId } from "@/actions/room"
import { useEffect, useState } from "react"

function RoomWithRoomId({ slug }: { slug: string }) {
     const [roomId, setRoomId] = useState("")
     async function fetchRoomId() {
          const roomId = await getRoomId({ slug });
          console.log(roomId);
          
          if(roomId) {
               setRoomId(roomId);
          }
     }
     useEffect(() => {
          fetchRoomId();
     }, [slug])
     return (
          <div>RoomWithRoomId {roomId}</div>
     )
}

export default RoomWithRoomId