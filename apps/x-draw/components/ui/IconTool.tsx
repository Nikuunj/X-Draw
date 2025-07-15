import { ReactNode } from 'react'

function IconTool({ activated, handleClick, children }: { activated: boolean, handleClick?: () => void, children:  ReactNode })  {
     return (
          <div className={`${activated ? 'text-red-600 bg-zinc-900 border-green-600' : 'text-white border-zinc-800 bg-zinc-900/0' } cursor-pointer border-1  hover:bg-zinc-900 bg-zinc-900/0 hover:border-zinc-500 rounded-md px-1.5 py-1 flex justify-center
               transition-all duration-300
               `} onClick={handleClick}>{children}</div>
     )  
}

export default IconTool