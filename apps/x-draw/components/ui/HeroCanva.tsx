"use client";

import { useRef, useState, useEffect } from "react";
import HeroToolKit from "./HeroToolKit";
import { SelectShapeType } from "@/actions/canva/Game";
import { DotBackgroundDemo } from "./GridDot";
import { motion } from 'framer-motion';
import { HeroGame } from "@/actions/canva/HeroGame";

function HeroCanva() {
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
          
          const resize = () => {
               const container = canvas.parentElement;
               if (container) {
               canvas.width = container.clientWidth;
               canvas.height = container.clientHeight;
               }
          };

          resize();
          window.addEventListener("resize", resize);
          return () => {
               g.cleanUp();
               window.removeEventListener("resize", resize);
          }
     }, [canvasRef]);

     return (
          <motion.div 
               animate={{
                    filter: [
                         "drop-shadow(0 0 130px #1366A5)",
                         "drop-shadow(0 0 90px #1366A5)",
                         "drop-shadow(0 0 150px #1366A5)",
                    ],
               }}
               transition={{
                    duration: 2.5,
                    ease: 'easeInOut',
                    repeat: Infinity,
               }}
               className="relative w-full aspect-[16/9] rounded-2xl max-w-[700px] outline-0"
          >
               <canvas
               ref={canvasRef}
               className="absolute inset-0 z-20 w-full h-full rounded-2xl outline-0 border-2 border-zinc-900"
               ></canvas>
               <div className="absolute inset-0 z-0 flex items-center justify-center rounded-2xl pointer-events-none">
                    <DotBackgroundDemo className={'rounded-2xl'} />
               </div>
               <HeroToolKit setShape={setShape} shape={shape}/> 
               <div className="absolute bottom-4 right-4 z-20  backdrop-blur-sm rounded-xl 
               px-3 py-1.5 text-xs text-muted-foreground border bg-[#0B0F1A] text-[#A6B0C3] border-[#1C2C3E]">
                  Click and drag to draw
               </div>
          </motion.div>
     );
}

export default HeroCanva;
