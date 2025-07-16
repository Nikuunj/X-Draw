import { ReactNode } from "react"

function Glow({ children }: { children: ReactNode }) {
     return (
          <div className={`drop-shadow-[0px_0px_33px_#32C3FF]`}>{children}</div>
     )
}

export default Glow