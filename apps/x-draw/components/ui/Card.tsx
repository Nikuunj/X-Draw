import { ReactNode } from "react"

function Card({ children, className }: { children: ReactNode, className?: string }) {
     return (
          <div className={`${className} border rounded-2xl px-6 py-7 transition-all duration-200
          border-cyan-950 hover:shadow-[0_0px_20px_#104e64] yan-900`}>
               {children}
          </div>
     )
}

export default Card