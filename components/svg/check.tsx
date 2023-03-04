import { AnimationControls, motion, useAnimation } from "framer-motion";
import { AnimationDefinition } from "framer-motion/types/render/utils/animation";
import { FC } from "react";
import { textVariants } from "../variants";

interface checkProps {
  delayTime?: Number;
  animation?: AnimationControls;
}

const Check: FC<checkProps> = props => {
  return (
    <div className="checkDiv">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="96.715"
        height="40"
        viewBox="0 0 96.715 40"
        className="check"
        variants={textVariants(props.delayTime)}
        initial="hidden"
        animate={props.animation}
      >
        <g transform="translate(0.246 -13.112)">
          <g transform="translate(-0.246)" stroke="#000" strokeWidth="12">
            <circle cx="41.5" cy="41.5" r="41.5" stroke="none" />
            <circle cx="41.5" cy="41.5" r="35.5" fill="none" />
          </g>
          <path
            d="M5662.76,2923.2l28.4,28.4,53.747-53.748"
            transform="translate(-5654.802 -2893.6)"
            fill="none"
            stroke="#fff"
            strokeWidth="18"
          />
        </g>
      </motion.svg>
    </div>
  );
};

export default Check;
