import { SelectShapeType } from "@/actions/canva/Game"
import IconTool from "./IconTool"
import { CaseLower, CircleIcon, MoveUpRight, RectangleHorizontal } from "lucide-react";

const HeroToolKit = ({ setShape, shape }: { setShape: (s: SelectShapeType) => void, shape: SelectShapeType  }) => {
     return (
          <div className="absolute top-2 left-2 flex gap-x-2 z-50">
               <IconTool activated={shape === SelectShapeType.Rect} handleClick={() => setShape(SelectShapeType.Rect)}><RectangleHorizontal className="w-5.5" /> </IconTool>
                    <IconTool activated={shape === SelectShapeType.Circle} handleClick={() => setShape(SelectShapeType.Circle)}><CircleIcon className="w-5.5"/></IconTool>
                    <IconTool activated={shape === SelectShapeType.Line} handleClick={() => setShape(SelectShapeType.Line)}><MoveUpRight className="w-5.5"/></IconTool>
                    <IconTool activated={shape === SelectShapeType.Text} handleClick={() => setShape(SelectShapeType.Text)}><CaseLower className="w-5.5"/> </IconTool>
          </div>
     )
}

export default HeroToolKit;