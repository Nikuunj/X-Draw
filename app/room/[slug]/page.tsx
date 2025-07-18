import RoomWithRoomId from "@/components/RoomWithRoomId";

async function Room({ params }: { 
     params : Promise<{ slug: string }>
}) {
     const slug = (await params).slug;
     return (
          <RoomWithRoomId slug={slug} />
     )
}

export default Room;