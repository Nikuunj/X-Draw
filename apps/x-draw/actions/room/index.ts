import { createRoomType } from '@repo/common/types';
import axios from 'axios';
import toast from 'react-hot-toast';
const authHeader = () => ({ 
     headers : {
          'Authorization' : localStorage.getItem('token') ?? ""
     }
})

export async function createRoom({ name }: createRoomType): Promise<boolean> {
     try {
          const response = await axios.post('http://localhost:3001/v1/room/create-room', {
                    name
               }, authHeader())
          toast.success(`Room created with name of ${name}`)
          return true;
     } catch (e) {
          if (axios.isAxiosError(e) && e.response) {
               console.error(e.response.data.massege)
               toast.error(e.response.data.massege)
          }
          return false;
     }
}

export const getRoomId = async ({ slug }: { slug: string }): Promise<string> => {
     try {
          const { data } = await axios.get(`http://localhost:3001/v1/room/${slug}`, authHeader())
          return data.roomId;
     } catch (e) {
          if (axios.isAxiosError(e) && e.response) {
               console.error(e.response.data.massege)
               toast.error(e.response.data.massege)
          }
          return "";
     }
}