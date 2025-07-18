import { Game, SelectShapeType } from '@/actions/canva/Game';
import React, { useEffect, useRef, useState } from 'react'
import ToolKit from './ui/HeroToolKit';

function Canvas({ roomId, socket }: { roomId: string, socket: WebSocket }) {
     const canvasRef = useRef<HTMLCanvasElement | null>(null);
     const [game, setGame] = useState<Game>()
     const [shape, setShape] = useState<SelectShapeType>(SelectShapeType.Text);

     useEffect(() => {
          if(!game) {
               return;
          }
          game.setShape(shape);
     },[shape, game])

     useEffect(() => {
          if(canvasRef.current) {
               const g = new Game(canvasRef.current, roomId, socket);
               setGame(g);
               return () => {
                    g.cleanUp();
               }
          }
     }, [canvasRef, socket])
     return (
          <>
               <canvas ref={canvasRef} height={window.innerHeight} width={window.innerWidth}></canvas>
               <ToolKit setShape={setShape} shape={shape}/> 
          </>
     )
}

export default Canvas