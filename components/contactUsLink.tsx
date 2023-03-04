import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { ReactChild, ReactFragment, ReactPortal, useState } from "react";
import ContactUsModal from "./contactUsModal";

const CUButtonVar = {
  hidden: {
    opacity: 0,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.25,
      damping: 10,
      duration: 0.3,
      delay: 0.3,
      staggerChildren: 0.1
    }
  },
  hoverOn: { scale: 1.05 },
  hoverOff: { scale: 1 }
};

export default function LinkComponent({ children }) {
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
        variants={CUButtonVar}
        className="link"
        whileHover={"hoverOn"}
        onHoverEnd={() => {
          control.start("hoverOff");
        }}
        onClick={() => {
          contactUsOpen ? closeCU() : openCU();
        }}
      >
        {children}
      </motion.div>
      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {contactUsOpen && <ContactUsModal modalOpen={contactUsOpen} handleClose={closeCU} />}
      </AnimatePresence>
    </>
  );
}
