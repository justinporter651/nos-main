import { useAnimation, motion, useSpring, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ContactUsModal from "./contactUsModal";

const CUSideButtonVar = {
  hidden: {
    x: "100%",
    y: "-50%"
  },
  visible: {
    x: 0,
    y: "-50%",
    transition: {
      type: "spring",
      bounce: 0.25,
      damping: 10,
      duration: 0.3,
      delay: 1,
      staggerChildren: 0.1
    }
  },
  hoverOn: { x: 0, y: "-50%", scale: 1.05 },
  hoverOff: { x: 0, y: "-50%", scale: 1 }
};

const CUTextVar = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" }
  }
};
export default function CUButton() {
  const control = useAnimation();
  control.start("visible");
  let [contactUsOpen, setContactUsOpen] = useState(false);
  const openCU = () => {
    setContactUsOpen(true);
  };
  const closeCU = () => {
    setContactUsOpen(false);
  };
  return (
    <>
      <motion.div
        animate={control}
        initial={"hidden"}
        variants={CUSideButtonVar}
        className="CUButton link"
        whileHover={"hoverOn"}
        onHoverEnd={() => {
          control.start("hoverOff");
        }}
        onClick={() => {
          contactUsOpen ? closeCU() : openCU();
        }}
      >
        <motion.h1
          className="CUText link fs thin"
          initial={"hidden"}
          animate={"visible"}
          variants={CUTextVar}
        >
          Plan a session
        </motion.h1>
      </motion.div>
      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {contactUsOpen && <ContactUsModal modalOpen={contactUsOpen} handleClose={closeCU} />}
      </AnimatePresence>
    </>
  );
}
