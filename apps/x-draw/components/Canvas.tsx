import { Game, SelectShapeType } from '@/actions/canva/Game';
import React, { useEffect, useRef, useState } from 'react'
import ToolKit from './ui/HeroToolKit';
import { DotBackgroundDemo } from './ui/GridDot';

function Canvas({ roomId, socket }: { roomId: string, socket: WebSocket }) {
     const canvasRef = useRef<HTMLCanvasElement | null>(null);
     const [game, setGame] = useState<Game>()
     const [shape, setShape] = useState<SelectShapeType>(SelectShapeType.Text);
     const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

     useEffect(() => {
          if(!game) {
               return;
          }
          game.setShape(shape);
     },[shape, game])

     useEffect(() => {
          setDimensions({
               width: window.innerWidth,
               height: window.innerHeight
          });
     }, []);

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
          <div className="overflow-hidden max-h-screen">
               <canvas
                    ref={canvasRef}
                    className="z-50 relative"
                    height={dimensions.height}
                    width={dimensions.width}
               />
               <div className="fixed inset-0 min-h-screen min-w-screen z-0">
                    <DotBackgroundDemo />
               </div>
               <ToolKit setShape={setShape} shape={shape}/>
          </div>
     )
}

export default Canvas