import { LucideIcon } from "lucide-react";

interface ButtonProps {
  text: string;
  handleClick?: () => void;
  className?: string;
  iconLeft?: LucideIcon;
  iconRight?: LucideIcon;
  variant?: "primary" | "secondary";
}

function Button({
     text,
     handleClick,
     className = "",
     iconLeft: IconLeft,
     iconRight: IconRight,
     variant = "primary",
}: ButtonProps) {

     const baseStyles = `cursor-pointer rounded-2xl outline-0 transition-all duration-300 px-6 py-3 rounded font-semibold flex items-center gap-2`;

     const variants = {
          primary: `bg-gradient-to-r from-[#00B4FF] to-[#007AFF] text-white hover:opacity-90`,
          secondary: `bg-[#0a0a1a] text-white border border-[#1e1e2f] hover:bg-[#131326]`,
     };

     return (
          <button
               onClick={handleClick}
               className={`${baseStyles} ${variants[variant]} ${className}`}
          >
               {IconLeft && <IconLeft size={18} />}
               <span>{text}</span>
               {IconRight && <IconRight size={18} />}
          </button>
     );
}

export default Button;
