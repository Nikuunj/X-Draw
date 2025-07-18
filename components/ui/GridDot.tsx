import { cn } from "@/lib/utils";
import React from "react";

export function DotBackgroundDemo({ className }: { className?: string }) {
     return (
          <div className={`${className} relative flex h-full inset-0 rounded-2xl w-full items-center justify-center bg-black`}>
               <div
               className={cn(
                    "absolute inset-0",
                    "[background-size:15px_15px]",
                    "[background-image:radial-gradient(#404040_1px,transparent_1px)]",
               )}
               />
               <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_100%,black)] bg-black"></div>
          </div>
     );
}
