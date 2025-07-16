import { ReactNode } from "react"
import { motion } from "framer-motion"

function Glow({ children, className }: { children: ReactNode, className?: string }) {
     return (
          <motion.div 
               animate={{
                    filter: [
                         "drop-shadow(0 0 35px #5ED1FF)",
                         "drop-shadow(0 0 35px #2199E8)",
                         "drop-shadow(0 0 35px #5ED1FF)",
                    ],
               }}
               transition={{
                    duration: 2.0,
                    repeat: Infinity,
               }}
               className={`${className} `}
          >
               {children}
          </motion.div>
     )
}

export default Glow