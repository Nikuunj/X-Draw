import { SelectShapeType } from "@/actions/canva/Game"
import IconTool from "./IconTool"
import { CaseLower, CircleIcon, MoveUpRight, PenIcon, RectangleHorizontal } from "lucide-react";

const ToolKit = ({ setShape, shape }: { setShape: (s: SelectShapeType) => void, shape: SelectShapeType  }) => {
     return (
          <div className="absolute top-0  flex  w-full justify-center  z-50">
               <div className="bg-zinc-900/80 px-7 pb-5 relative flex rounded-b-xl ">
                    <IconTool activated={shape === SelectShapeType.Rect} handleClick={() => setShape(SelectShapeType.Rect)}><RectangleHorizontal className="w-5.5" /> </IconTool>
                    <IconTool activated={shape === SelectShapeType.Pen} handleClick={() => setShape(SelectShapeType.Pen)}><PenIcon className="w-5.5" /></IconTool>
                    <IconTool activated={shape === SelectShapeType.Circle} handleClick={() => setShape(SelectShapeType.Circle)}><CircleIcon className="w-5.5"/></IconTool>
                    <IconTool activated={shape === SelectShapeType.Line} handleClick={() => setShape(SelectShapeType.Line)}><MoveUpRight className="w-5.5"/></IconTool>
                    <IconTool activated={shape === SelectShapeType.Text} handleClick={() => setShape(SelectShapeType.Text)}><CaseLower className="w-5.5"/> </IconTool>
               </div>
          </div>
     )
}

export default ToolKit;