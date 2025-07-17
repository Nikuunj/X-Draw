
function GradienText({ text }: { text: string }) {
     return (
         <span className={"bg-gradient-to-r from-cyan-400 to-cyan-500 bg-clip-text text-transparent"}>{text}</span>
     )
}

export default GradienText