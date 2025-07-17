import { initDraw } from '@/actions/canva';
import { Game, SelectShapeType } from '@/actions/canva/Game';
import { hadUnsupportedValue } from 'next/dist/build/analysis/get-page-static-info';
import React, { useEffect, useRef, useState } from 'react'
import ToolKit from './ui/ToolKit';

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