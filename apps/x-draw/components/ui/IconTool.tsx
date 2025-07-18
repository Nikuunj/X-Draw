"use client"
import { ReactNode } from 'react'
import { motion } from 'framer-motion'

function IconTool({ activated, handleClick, children }: { activated: boolean, handleClick?: () => void, children:  ReactNode })  {
     return (
          <motion.div 
               whileTap={{ y: 150 }} 
               transition={{
                    ease: 'easeInOut',
                    duration: 0.3
               }}
               className={`relative 
                    ${activated ? ' bg-black text-red-600 border-white/0' : 'text-white border-zinc-800 bg-zinc-900/0'} border border-t-0 
                    cursor-pointer px-2.5 py-1.5 flex justify-center items-center rounded-b-md 
                    transition-all duration-300
               `}
               onClick={handleClick}
               >
                    {children}
               </motion.div>

     )  
}

export default IconTool