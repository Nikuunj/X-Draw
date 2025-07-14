import { ReactNode } from 'react'

function IconTool({ activated, handleClick, children }: { activated: boolean, handleClick?: () => void, children:  ReactNode })  {
     return (
          <div className={`${activated ? 'text-red-600' : 'text-white' } cursor-pointer border  border-zinc-700/0 hover:bg-zinc-900 bg-zinc-900/0 hover:border-zinc-700 rounded-md px-1.5 py-1 flex justify-center
               transition-all duration-300
               `} onClick={handleClick}>{children}</div>
     )  
}

export default IconTool