import { SelectShapeType } from "@/actions/canva/Game"
import IconTool from "./IconTool"
import { CaseLower, CircleIcon, MoveUpRight, RectangleHorizontal } from "lucide-react";

const ToolKit = ({ setShape, shape }: { setShape: (s: SelectShapeType) => void, shape: SelectShapeType  }) => {
     return (
          <div className="fixed top-2 left-2 flex gap-x-2">
               <IconTool activated={shape === SelectShapeType.Rect} handleClick={() => setShape(SelectShapeType.Rect)} children={<RectangleHorizontal className="w-5.5" />}/>
               <IconTool activated={shape === SelectShapeType.Circle} handleClick={() => setShape(SelectShapeType.Circle)} children={<CircleIcon className="w-5.5"/>}/>
               <IconTool activated={shape === SelectShapeType.Line} handleClick={() => setShape(SelectShapeType.Line)} children={<MoveUpRight className="w-5.5"/>}/>
               <IconTool activated={shape === SelectShapeType.Text} handleClick={() => setShape(SelectShapeType.Text)} children={<CaseLower className="w-5.5"/>}/>
          </div>
     )
}

export default ToolKit;