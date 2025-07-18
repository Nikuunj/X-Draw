"use client"
import { SelectShapeType } from "@/actions/canva/Game";
import { HeroGame } from "@/actions/canva/HeroGame";
import { DotBackgroundDemo } from "@/components/ui/GridDot";
import ToolKit from "@/components/ui/ToolKit";


import { useEffect, useRef, useState } from "react";

const DrawCanvas = () => {
     const canvasRef = useRef<HTMLCanvasElement | null>(null);
     const [game, setGame] = useState<HeroGame>();
     const [shape, setShape] = useState<SelectShapeType>(SelectShapeType.Rect);
     
     useEffect(() => {
          if(!game){
               return
          }
          game.setShape(shape);
     }, [shape])
     
     useEffect(() => {
          const canvas = canvasRef.current;
          if (!canvas) return;

          const g = new HeroGame(canvas);
          setGame(g);
          return () => {
               g.cleanUp();
          }
     }, [canvasRef]);
     return (
          <div className="overflow-hidden max-h-screen">
               <canvas ref={canvasRef} className="z-50 relative" height={window.innerHeight} width={window.innerWidth}></canvas>
               <div className="fixed inset-0 min-h-screen min-w-screen z-0">
                    <DotBackgroundDemo />
               </div>
               <ToolKit setShape={setShape} shape={shape}/>
          </div>
     )
}

export default DrawCanvas