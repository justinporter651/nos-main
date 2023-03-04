import NavBarW from "../components/NavbarWhite";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { boxVariants, textVariants } from "../components/variants";
import { useInView } from "react-intersection-observer";
import debounce from "lodash.debounce";

const orchestrator = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } }
};

const fadeIn = {
  hidden: {
    opacity: 0,
    scale: 1.2
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function Community({}) {
  const qb1control = useAnimation();
  const qb2control = useAnimation();
  const qb3control = useAnimation();
  const qb4control = useAnimation();

  const [qb1, qb1Visible] = useInView({ threshold: 0.2 });
  const [qb2, qb2Visible] = useInView({ threshold: 0.2 });
  const [qb3, qb3Visible] = useInView({ threshold: 0.2 });
  const [qb4, qb4Visible] = useInView({ threshold: 0.2 });

  let [windowMobile, setWindowMobile] = useState(true);

  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined
    });

    const emptyHandler = () => {};

    useEffect(() => {
      if (typeof window !== "undefined") {
        // Handler to call on window resize
        var handleResize = debounce(() => {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
          });
        }, 500);

        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []);
    return windowSize;
  }

  let size = useWindowSize();
  useEffect(() => {
    if (size.width <= 850) {
      setWindowMobile(true);
      console.log("set mobile to true");
    } else {
      setWindowMobile(false);
      console.log("set mobile to false");
    }
  }, [size.width]);

  useEffect(() => {
    if (qb1Visible) {
      qb1control.start("visible");
    }
  }, [qb1Visible, qb1control]);

  useEffect(() => {
    if (qb2Visible) {
      qb2control.start("visible");
    }
  }, [qb2Visible, qb2control]);

  useEffect(() => {
    if (qb3Visible) {
      qb3control.start("visible");
    }
  }, [qb3Visible, qb3control]);

  useEffect(() => {
    if (qb4Visible) {
      qb4control.start("visible");
    }
  }, [qb4Visible, qb4control]);
  return (
    <>
      <title>Join Us | No Off Season</title>
      <NavBarW active={2} isMobile={windowMobile} />
      <motion.div className="communityHero">
        <motion.div className="communityHeroInner">
          <motion.div
            className="communityTitleDiv"
            variants={orchestrator}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 className="fs xxlarge textW" variants={fadeIn}>
              Our Growing Community
            </motion.h1>
            <motion.h2 className="fs large textW" variants={fadeIn}>
              Thank You!
            </motion.h2>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div className="community">
        <motion.h1 className="b fs xlarge">
          What the<br></br>community is saying
        </motion.h1>
        <motion.div
          className="quoteBlockRight"
          variants={boxVariants}
          ref={qb1}
          animate={qb1control}
          initial="hidden"
        >
          <motion.p className="zs b medium" variants={textVariants(0.4)}>
            ... I come away from that hour feeling powerful and ready for anything. Brannon creates
            a challenging, fun, and safe fitness environment. Everyone working out with Brannon is
            made to feel welcome- a positive environment that makes me come back for more!
          </motion.p>
          <motion.p className="fs b medium-large personRigth" variants={textVariants(0.5)}>
            | Monica Peterson |
          </motion.p>
          <motion.div className="pictureDivRight cPic1" variants={textVariants(0.6)}></motion.div>
        </motion.div>
        <motion.div
          className="quoteBlockLeft"
          variants={boxVariants}
          ref={qb2}
          animate={qb2control}
          initial="hidden"
        >
          <motion.p className="zs b medium" variants={textVariants(0.4)}>
            ... I come away from that hour feeling powerful and ready for anything. Brannon creates
            a challenging, fun, and safe fitness environment. Everyone working out with Brannon is
            made to feel welcome- a positive environment that makes me come back for more!
          </motion.p>
          <motion.p className="fs b medium-large personLeft" variants={textVariants(0.5)}>
            | Hillary Lane |
          </motion.p>
          <motion.p className="pictureDivLeft cPic2" variants={textVariants(0.6)}></motion.p>
        </motion.div>
        <motion.div
          className="quoteBlockRight"
          ref={qb3}
          variants={boxVariants}
          animate={qb3control}
          initial="hidden"
        >
          <motion.p className="zs b medium" variants={textVariants(0.4)}>
            While I work out in a group with Brannon, he and Gavin are very sensitive to the, ahem,
            &#34;aging process.&#34; There isn&#39;t an exercise that can&#39;t be modified for my
            ache du jour. I am in a group of great women; our ages span from 40 - 66. I am proud to
            be the senior member and prouder still to get to the finish line at the same time as
            those who are my junior! Thank you NOS!
          </motion.p>
          <motion.p className="fs b medium-large personRight" variants={textVariants(0.5)}>
            | Maggie Hayworth |
          </motion.p>
          <motion.div className="pictureDivRight cPic3" variants={textVariants(0.6)}></motion.div>
        </motion.div>
        <motion.div
          className="quoteBlockLeft"
          ref={qb4}
          variants={boxVariants}
          animate={qb4control}
          initial="hidden"
        >
          <motion.p className="zs b medium" variants={textVariants(0.4)}>
            N.O.S is really more than a gym. Brannon and Gavin are interested in my emotional and
            spiritual health, as well as the physical. With their encouragement getting stronger and
            staying fit is something I enjoy not just something I do. Going to N.O.S and being
            around the people there has become an essential part of my day.
          </motion.p>
          <motion.p className="fs b medium-large personLeft" variants={textVariants(0.5)}>
            | Robert Seahorn |
          </motion.p>
          <motion.div className="pictureDivLeft cPic4" variants={textVariants(0.6)}></motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}
