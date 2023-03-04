import { animate, DragControls, motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { FC, MouseEventHandler } from "react";
import Backdrop from "./backdrop";
import { pageVariants, textVariants } from "./variants";

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

function navModalVar(delayTime) {
  return {
    visible: {
      opacity: 1,
      scale: 1,
      transition: { ease: "easeOut", duration: 0.5, delay: delayTime }
    },
    hoverOn: {
      scale: 1.1
    },
    hoverOff: {
      scale: 1
    },
    hidden: { opacity: 0, scale: 1.1 }
  };
}

interface NavBarProps {
  handleClose: MouseEventHandler;
  modalOpen: Boolean;
}

const NavbarModal: FC<NavBarProps> = ({ handleClose, modalOpen }) => {
  const control = useAnimation();
  control.start("visible");
  if (modalOpen) {
    return (
      <>
        <Backdrop handleClose={handleClose}>
          <motion.div
            onClick={e => {
              e.stopPropagation;
            }}
            className="navbarModal"
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Link href={"../meet"} passHref>
              <motion.h1
                animate={control}
                className="textW xlarge fs b link"
                variants={navModalVar(0.1)}
                initial={"hidden"}
                whileHover={"hoverOn"}
                onHoverEnd={() => {
                  control.start("hoverOff");
                }}
              >
                Meet Us
              </motion.h1>
            </Link>
            <Link href={"../community"} passHref>
              <motion.h1
                animate={control}
                className="textW xlarge fs b link"
                variants={navModalVar(0.3)}
                initial={"hidden"}
                whileHover={"hoverOn"}
                onHoverEnd={() => {
                  control.start("hoverOff");
                }}
              >
                Community
              </motion.h1>
            </Link>
            <Link href={"../train"} passHref>
              <motion.h1
                animate={control}
                className="textW xlarge fs b link"
                variants={navModalVar(0.5)}
                initial={"hidden"}
                whileHover={"hoverOn"}
                onHoverEnd={() => {
                  control.start("hoverOff");
                }}
              >
                Train
              </motion.h1>
            </Link>
          </motion.div>
        </Backdrop>
      </>
    );
  }
};

export default NavbarModal;
