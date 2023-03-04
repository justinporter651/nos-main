import { motion } from "framer-motion";
import { FC, MouseEventHandler } from "react";
import Backdrop from "./backdrop";

interface modalProps {
  handleClose: MouseEventHandler;
  modalOpen: boolean;
}

const dropIn = {
  hidden: {
    opacity: 0,
    y: "-100vh"
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.1
    }
  },
  exit: {
    opacity: 0,
    y: "100vh"
  }
};

const childDropIn = {
  hidden: {
    opacity: 0,
    scale: 1.2
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeInOut" }
  }
};

const orchestrator = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } }
};

const ContactUsModal: FC<modalProps> = ({ handleClose, modalOpen }) => {
  if (modalOpen) {
    return (
      <Backdrop handleClose={handleClose}>
        <motion.div
          onClick={e => {
            e.stopPropagation();
          }}
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="contactUsModal blueGradient"
        >
          <motion.h1 className="xlarge zs modalText" variants={childDropIn}>
            Got a question?
          </motion.h1>
          <motion.h2 className="xlarge zs modalText" variants={childDropIn}>
            Want to plan a session?
          </motion.h2>
          <motion.h2 className="xlarge zs modalText thin" variants={childDropIn}>
            Give us a shout!
          </motion.h2>
          <motion.h1
            className="medium-large zs modalTextD thin topBarDivThin"
            variants={childDropIn}
          >
            Gavin: <span className="noLineBreak">251-656-6025</span> | gavin@trainnos.com
          </motion.h1>
          <motion.h1 className="medium-large zs modalTextD thin" variants={childDropIn}>
            Brannon: <span className="noLineBreak">251-895-4302</span> | brannon@trainnos.com
          </motion.h1>
          <motion.h1 className="xlarge zs modalTextD thin topBarDiv" variants={childDropIn}>
            Or drop by!
          </motion.h1>
          <motion.h1 className="medium-large zs modalTextD thin" variants={childDropIn}>
            25620 Friendship Rd, Daphne Al, 36526
          </motion.h1>
          <motion.h1
            className="medium-large zs modalTextD thin topBarDivThin"
            variants={childDropIn}
          >
            Monday-Thursday: 5-11am, <span className="noLineBreak">3:30-6:30</span>
          </motion.h1>
          <motion.h1 className="medium-large zs modalTextD thin" variants={childDropIn}>
            Friday: 5-11am
          </motion.h1>
        </motion.div>
      </Backdrop>
    );
  } else {
  }
};

export default ContactUsModal;
