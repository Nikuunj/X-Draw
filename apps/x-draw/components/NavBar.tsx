
import { Github } from "lucide-react"
import Link from "next/link"

function NavBar() {
     return (
          <div className="fixed w-full px-5 py-3 z-50"> 
               <div className="backdrop-blur-md border-2 border-cyan-900/20 bg-gradient-to-r from-white/5 via-black/15 to-white/5
                drop-shadow-cyan-800 drop-shadow-2xl py-3 items-center px-2 sm:px-10 lg:px-24 rounded-3xl flex justify-between">
                    <div className="flex items-center gap-3">
                         <div className=" p-2 sm:p-3 bg-cyan-600 rounded-xl sm:rounded-2xl flex justify-center items-center"> 
                              <div className=" border-3 rounded-full h-4  w-4 sm:h-5 sm:w-5">{' '}</div> 
                         </div>
                         <div className=" text-lg sm:text-3xl font-bold">
                              XDraw
                         </div>
                    </div>
                    <div className="flex gap-2 items-center">
                         <div className=" rounded-xl bg-gradient-to-r from-white/0 to-white/0 flex items-center 
                         hover:from-[#00B4FF] hover:to-[#007AFF] font-bold duration-300 transition-colors">
                              <a href="https://github.com/Nikuunj/x-draw" target="_blank" rel="github" className="flex gap-3 px-3.5 py-1.5">
                              <Github className="w-4.5"/>  <span className="hidden sm:block"> GitHub </span>
                              </a>
                         </div>
                              <Link href={'/signin'} className="w-full h-full">
                                   <div className="bg-gradient-to-r from-[#00B4FF] to-[#007AFF] min-w-24  py-1.5 px-2.5 sm:px-4 flex items-center rounded-xl justify-center text-center font-bold">
                                        Draw idea
                                   </div>
                              </Link>

                    </div>
               </div>
          </div>
     )
}

export default NavBar