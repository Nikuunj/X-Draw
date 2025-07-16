import { useRef, useState } from "react";
import ToolKit from "./ToolKit";
import { Game, SelectShapeType } from "@/actions/canva/Game";
import { DotBackgroundDemo } from "./GridDot";

function HeroCanva() {
     const canvasRef = useRef<HTMLCanvasElement | null>(null);
     const [game, setGame] = useState<Game>();
     const [shape, setShape] = useState<SelectShapeType>(SelectShapeType.Text);

     return (
          <div className="relative w-[600px] h-[350px]">
               {/* Canvas */}
               <canvas
               ref={canvasRef}
               className="absolute inset-0 z-10"
               width={600}
               height={350}
               ></canvas>

               {/* Optional Background Label - remove if not needed */}
               <div className="absolute inset-0 z-0 flex items-center  justify-center text-white pointer-events-none">
                    <DotBackgroundDemo />
               </div>

               {/* Instruction Tooltip */}
               <div className="absolute bottom-4 right-4 z-20 bg-card/80 backdrop-blur-sm rounded-lg px-3 py-2 text-xs text-muted-foreground border border-primary/20">
               Click and drag to draw
               </div>
          </div>
     );
}

export default HeroCanva;
