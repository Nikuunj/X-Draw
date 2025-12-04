import { SelectShapeType } from "@/actions/canva/Game"
import IconTool from "./IconTool"
import { CaseLower, CircleIcon, MoveUpRight, RectangleHorizontal } from "lucide-react";

const HeroToolKit = ({ setShape, shape }: { setShape: (s: SelectShapeType) => void, shape: SelectShapeType  }) => {
     return (
          <div className="absolute top-0  flex  w-full justify-center  z-50">
               <div className="bg-zinc-900/80 px-7 pb-5 relative flex rounded-b-xl ">
                    <IconTool activated={shape === SelectShapeType.Rect} handleClick={() => setShape(SelectShapeType.Rect)} children={<RectangleHorizontal className="w-5.5" />}/>
                    <IconTool activated={shape === SelectShapeType.Circle} handleClick={() => setShape(SelectShapeType.Circle)} children={<CircleIcon className="w-5.5"/>}/>
                    <IconTool activated={shape === SelectShapeType.Line} handleClick={() => setShape(SelectShapeType.Line)} children={<MoveUpRight className="w-5.5"/>}/>
                    <IconTool activated={shape === SelectShapeType.Text} handleClick={() => setShape(SelectShapeType.Text)} children={<CaseLower className="w-5.5"/>}/>
               </div>
          </div>
     )
}

export default HeroToolKit;