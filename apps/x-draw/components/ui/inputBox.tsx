
interface InputBoxProps {
     type: string;
     className?: string;
     placeHolder: string;
     reference: (instance: HTMLInputElement | null) => void;
}

function InputBox({
     type, 
     className,
     placeHolder,
     reference
} : InputBoxProps) {
  return (
     <input type={type} ref={reference} className={`${className} 
     outline-0 border  border-zinc-800  rounded px-5 py-2.5 focus:border-zinc-700  transition-all duration-300
     ` } placeholder={placeHolder}
    />
  )
}

export default InputBox