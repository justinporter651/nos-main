import { motion } from "framer-motion";
import { FC, MouseEventHandler, ReactChild } from "react";

interface backdropProps {
  children: ReactChild;
  handleClose: MouseEventHandler;
}

const Backdrop: FC<backdropProps> = ({ children, handleClose }) => {
  return (
    <motion.div
      className="backdrop"
      onClick={handleClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
      <motion.h1
        className="backdropClose thin"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.4, ease: "easeOut" } }}
        onClick={handleClose}
      >
        Close
      </motion.h1>
    </motion.div>
  );
};

export default Backdrop;
