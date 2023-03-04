import { motion, AnimatePresence } from "framer-motion";
import NavBarWB from "../../components/Navbar";
import TireFlip from "../../components/svg/tireFlip";
import Runner from "../../components/svg/runner";
import { useState } from "react";
import ContactUsModal from "../../components/contactUsModal";

const fadeIn = {
  hidden: {
    opacity: 0,
    scale: 1.2
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.2
    }
  }
};

const fadeIn2 = {
  hidden: {
    opacity: 0,
    scale: 1.2
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.1
    }
  }
};

const childFadeIn = {
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

const childH1FadeIn = {
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

const buttonVariants = {
  hidden: {
    opacity: 0,
    scale: 1.2
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeInOut" }
  },
  hover: {
    scale: 1.2,
    transition: { duration: 0.2, ease: "easeInOut" }
  }
};

export default function GroupFitness({}) {
  const [contactUsOpen, setContactUsOpen] = useState(false);

  const open = () => {
    setContactUsOpen(true);
    console.log("open function ran");
  };
  const close = () => setContactUsOpen(false);

  return (
    <>
      <title>Group Fitness</title>
      <motion.div className="trainPageParent" variants={fadeIn} initial="hidden" animate="visible">
        <NavBarWB cookieCrumb={"/train"} isMobile={false} />
        <TireFlip variants={childFadeIn} />
        <Runner variants={childFadeIn} />
        <motion.h1 className="pricingHeader fs xlarge" variants={childH1FadeIn}>
          Finally stop spinning your tires
        </motion.h1>
        <motion.h1 className="fs xlarge" variants={childH1FadeIn}>
          Get results
        </motion.h1>
        <motion.div className="trainPageRed" variants={childFadeIn}></motion.div>
        <motion.div className="pricingDiv" variants={fadeIn2}>
          <motion.p className="fs large pricingTitle" variants={childFadeIn}>
            Group Training
          </motion.p>
          <motion.p className="fs medium-large thin noLineBreak benefits" variants={childFadeIn}>
            Science-based Approach<br></br>
            Proven Results
            <br></br>Time-effective Plans
          </motion.p>
          <motion.p className="fs medium-large" variants={childFadeIn}>
            $25/session
          </motion.p>
          <motion.p className="fs medium-large thin" variants={childFadeIn}>
            5:30-6:30 a.m.<br></br>8-9 a.m.
          </motion.p>
          <motion.button
            className="contactUsButton large"
            whileHover={{ scale: 1.05, transition: { duration: 0.5, ease: "easeOut" } }}
            whileTap={{ scale: 1 }}
            onClick={() => {
              contactUsOpen ? close() : open();
            }}
          >
            Get a session
          </motion.button>
        </motion.div>
      </motion.div>
      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {contactUsOpen && <ContactUsModal modalOpen={contactUsOpen} handleClose={close} />}
      </AnimatePresence>
    </>
  );
}
