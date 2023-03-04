import { motion } from "framer-motion";

const calendarVariants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: { ease: "easeOut", duration: 0.5, delay: 0.5 }
  },
  hidden: {
    opacity: 0,
    scale: 1.5
  }
};

export default function Calendar({ animateControl }) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 259 259"
      className="calendar"
      animate={animateControl}
      initial="hidden"
      variants={calendarVariants}
    >
      <circle
        cx="129.5"
        cy="129.5"
        r="125"
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="9"
      />
      <line
        x1="217.89"
        y1="41.11"
        x2="41.11"
        y2="217.89"
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="9"
      />
      <path
        d="M158.31,200.07H91.69A55.08,55.08,0,0,1,36.61,145V105A55.08,55.08,0,0,1,91.69,49.93h66.62A55.08,55.08,0,0,1,213.39,105v40A55.08,55.08,0,0,1,158.31,200.07Z"
        transform="translate(4.5 4.5)"
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="9"
      />
      <line
        x1="129.5"
        y1="95.87"
        x2="129.5"
        y2="54.43"
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="9"
      />
      <circle
        cx="129.5"
        cy="95.87"
        r="4.42"
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="9"
      />
    </motion.svg>
  );
}
