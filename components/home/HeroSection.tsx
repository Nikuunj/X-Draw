"use client"

import { ArrowRight, Zap } from "lucide-react"
import Button from "../ui/Button"
import Glow from "../ui/Glow"
import HeroCanva from "../ui/HeroCanva"

function HeroSection() {
     return (
          <div className="flex flex-col md:flex-row items-center w-full  h-full px-2 sm:px-10 lg:px-24 text-center md:text-start ">
               <div className="w-full flex justify-center items-center md:items-start flex-col space-y-5 min-h-screen">
                    <div className="inline-flex w-fit items-center px-4 py-2 rounded-full border bg-transparent hover:bg-cyan-900/20 border-cyan-700 text-cyan-400 transition-all duration-300 text-sm font-medium">
                         <Zap className="w-4 h-4 mr-2" />
                         Free & Open Source
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
                         Sketch your {" "}
                         <Glow>
                              <span className="animate-glow-pulse bg-gradient-to-r from-cyan-400 to-cyan-500 bg-clip-text text-transparent">
                                   ideas
                              </span>
                         </Glow>
                    </h1>
                    <h2 className="text-xl md:text-xl text-gray-400 text-balance md:pe-26">
                         A virtual collaborative whiteboard where you can sketch diagrams that have a hand-drawn feel to them.
                    </h2>
                    <div className="flex gap-5 justify-center md:justify-start">
                         <Button
                              text="Start Drawing"
                              iconRight={ArrowRight}
                              variant="primary"
                              handleClick={() => console.log("Drawing...")}
                         />
                    </div>
               </div>  
               <div className="flex justify-center items-center w-full">
                    <HeroCanva />
               </div>
          </div>
     )
}

export default HeroSection