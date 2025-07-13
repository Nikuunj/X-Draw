
interface ButtonProps{
     text: string;
     handleClick?: () => void;
     className?: string;
}

function Button({
     text,
     handleClick,
     className
}: ButtonProps) {
     return (
          <button className={`${className} cursor-pointer border outline-0 border-zinc-700 focus:border-zinc-600  transition-all duration-300 px-7 py-2 rounded`} onClick={handleClick}>{text}</button>
     )
}

export default Button