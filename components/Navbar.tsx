import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { NextURL } from "next/dist/server/web/next-url";
import Link from "next/link";
import { FC, MouseEventHandler, useState } from "react";
import Shield from "./svg/shield";
import ShieldB from "./svg/shieldB";
import NavbarModal from "./navbarModal";

function NavVariants(delayTime) {
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

const emptyHandler = () => {};

const NavBarWB = ({ cookieCrumb, isMobile }) => {
  const [navOpen, setNavOpen] = useState(false);
  const close = () => {
    setNavOpen(false);
  };
  const open = () => {
    setNavOpen(true);
  };
  const control = useAnimation();
  control.start("visible");
  return (
    <>
      <motion.nav className="navbar">
        {cookieCrumb == null ? (
          <Link href={"/"} passHref>
            <motion.div className="logo">
              <motion.div
                className="logoDiv"
                animate={control}
                initial="hidden"
                variants={NavVariants(0.5)}
                whileHover={"hoverOn"}
                onHoverEnd={() => {
                  control.start("hoverOff");
                }}
              >
                <Shield />
                <motion.div className="typeLogo">
                  <p className="largeLogo">
                    N.O.S.<br></br>
                    <span className="smallLogo sub">Est. 2013</span>
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </Link>
        ) : (
          <Link href={"/"} passHref>
            <motion.div className="logo">
              <motion.div
                className="logoDivB"
                animate={control}
                initial="hidden"
                variants={NavVariants(0.5)}
                whileHover={"hoverOn"}
                onHoverEnd={() => {
                  control.start("hoverOff");
                }}
              >
                <ShieldB />
                <motion.div className="typeLogoB">
                  <text className="largeLogo">
                    N.O.S.<br></br>
                    <span className="smallLogo sub">Est. 2013</span>
                  </text>
                </motion.div>
              </motion.div>
            </motion.div>
          </Link>
        )}
        {cookieCrumb == null ? (
          <motion.div
            className="navList"
            onClick={() => {
              navOpen ? close() : open();
            }}
          >
            <Link href={"meet"} passHref>
              <motion.a
                className="medium fs"
                animate={control}
                initial="hidden"
                variants={NavVariants(0.6)}
                whileHover={"hoverOn"}
                onHoverEnd={() => {
                  control.start("hoverOff");
                }}
              >
                Meet Us
              </motion.a>
            </Link>
            <Link href={"community"} passHref>
              <motion.a
                className="medium fs"
                animate={control}
                initial="hidden"
                variants={NavVariants(0.7)}
                whileHover={"hoverOn"}
                onHoverEnd={() => {
                  control.start("hoverOff");
                }}
              >
                Community
              </motion.a>
            </Link>
            <Link href={"train"} passHref>
              <motion.a
                className="medium fs"
                animate={control}
                initial="hidden"
                variants={NavVariants(0.9)}
                whileHover={"hoverOn"}
                onHoverEnd={() => {
                  control.start("hoverOff");
                }}
              >
                Train
              </motion.a>
            </Link>
            <div className="lastBar"></div>
          </motion.div>
        ) : (
          <Link href={cookieCrumb} passHref>
            <div className="backButtonParent">
              <motion.p
                className="medium fs backButton"
                animate={control}
                initial="hidden"
                variants={NavVariants(0.9)}
                whileHover={"hoverOn"}
                onHoverEnd={() => {
                  control.start("hoverOff");
                }}
              >
                Back
              </motion.p>
            </div>
          </Link>
        )}
      </motion.nav>
      {isMobile && (
        <AnimatePresence initial={false} exitBeforeEnter={true}>
          {navOpen && <NavbarModal modalOpen={navOpen} handleClose={close} />}
        </AnimatePresence>
      )}
    </>
  );
};
export default NavBarWB;
