import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { FC, useState } from "react";
import ShieldWC, { ShieldWCTrain } from "./svg/shieldw";
import Link from "next/link";
import NavbarModal from "./navbarModal";

interface navProps {
  active: Number;
  cookieCrumb?;
  isMobile?;
}

function navVars(delayTime) {
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
    hidden: { opacity: 0, scale: 1.5 }
  };
}

const NavBarW: FC<navProps> = props => {
  const [navOpen, setNavOpen] = useState(false);
  const close = () => {
    setNavOpen(false);
    return "done";
  };
  const open = () => {
    setNavOpen(true);
  };
  const control = useAnimation();
  control.start("visible");
  return (
    <>
      <motion.nav className={props.active === 1 ? "navbarWh" : "navbarWh grayBackdrop"}>
        <Link href={"/"} passHref>
          <motion.div className="logo">
            <motion.div
              className="logoDiv"
              animate={control}
              initial="hidden"
              variants={navVars(0.5)}
              whileHover={"hoverOn"}
              onHoverEnd={() => {
                control.start("hoverOff");
              }}
              whileTap={{ scale: 0.9 }}
            >
              {<ShieldWC />}
              <div className="typeLogo">
                <p className="largeLogo">
                  N.O.S.<br></br>
                  <span className="smallLogo sub">Est. 2013</span>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </Link>
        <div
          className="navListW"
          onClick={() => {
            navOpen ? close() : open();
          }}
        >
          <Link href={"meet"} passHref>
            <motion.a
              className={props.active === 1 ? "medium av selected" : "medium av textW"}
              animate={control}
              initial="hidden"
              variants={navVars(0.6)}
              whileHover={"hoverOn"}
              onHoverEnd={() => {
                control.start("hoverOff");
              }}
              whileTap={{ scale: 0.9 }}
            >
              Meet Us
            </motion.a>
          </Link>
          <Link href={"community"} passHref>
            <motion.a
              className={props.active === 2 ? "medium av selected" : "medium av textW"}
              animate={control}
              initial="hidden"
              variants={navVars(0.6)}
              whileHover={"hoverOn"}
              onHoverEnd={() => {
                control.start("hoverOff");
              }}
              whileTap={{ scale: 0.9 }}
            >
              Community
            </motion.a>
          </Link>
          <Link href={"train"} passHref>
            <motion.a
              className={props.active === 4 ? "medium av selected" : "medium av textW"}
              animate={control}
              initial="hidden"
              variants={navVars(0.6)}
              whileHover={"hoverOn"}
              onHoverEnd={() => {
                control.start("hoverOff");
              }}
              whileTap={{ scale: 0.9 }}
            >
              Train
            </motion.a>
          </Link>
          <div className="lastBarW"></div>
        </div>
      </motion.nav>
      {props.isMobile && (
        <AnimatePresence initial={false} exitBeforeEnter={true}>
          {navOpen && <NavbarModal modalOpen={navOpen} handleClose={close} />}
        </AnimatePresence>
      )}
    </>
  );
};

export default NavBarW;
