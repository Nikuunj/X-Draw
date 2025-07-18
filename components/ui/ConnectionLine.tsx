import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export interface XYPropstype {
     x: number,
     y: number
}
const ConnectionLine = ({ start, end }: { start: XYPropstype, end: XYPropstype }) => {
  const animation = useAnimation();
  const pathLength = `M ${start.x} ${start.y} L ${end.x} ${end.y}`;

  useEffect(() => {
    animation.start({
      pathLength: 1,
      transition: { duration: 1, ease: "easeInOut" },
    });
  }, [animation, start, end]);

  return (
    <svg width="100%" height="100%" viewBox="0 0 100 100">
      <motion.path
        d={pathLength}
        stroke="black"
        strokeWidth="2"
        fill="transparent"
        initial={{ pathLength: 0 }}
        animate={animation}
      />
    </svg>
  );
};

export default ConnectionLine;