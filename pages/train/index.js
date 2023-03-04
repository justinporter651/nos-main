import NavBarW from "../../components/navbarWhite";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { textVariants } from "../../components/variants";
import debounce from "lodash.debounce";
import { useState, useEffect } from "react";
import NavbarModal from "../../components/navbarModal";

export default function Train({}) {
  const [windowMobile, setWindowMobile] = useState(true);

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

  return (
    <>
      <title>Train Today</title>
      <NavBarW active={4} isMobile={windowMobile} />
      <div className="trainHero">
        <Link href={"/train/sp"} passHref>
          <div className="sportsPerformanceOutline">
            <div className="sportsPerformance"></div>
            <motion.p
              className="fs textW xxlarge"
              variants={textVariants(0.3)}
              initial="hidden"
              animate="visible"
            >
              Sports Performance
            </motion.p>
          </div>
        </Link>
        <Link href={"/train/gf"} passHref>
          <div className="groupTrainingOutline">
            <div className="groupTraining" id="groupTraining"></div>
            <motion.p
              className="fs textW xxlarge"
              variants={textVariants(0.4)}
              initial="hidden"
              animate="visible"
            >
              Group Training
            </motion.p>
          </div>
        </Link>
        <Link href={"/train/pt"} passHref>
          <div className="personalTrainingOutline">
            <div className="personalTraining"></div>
            <motion.p
              className="fs textW xxlarge"
              variants={textVariants(0.5)}
              initial="hidden"
              animate="visible"
            >
              Personal Training
            </motion.p>
          </div>
        </Link>
      </div>
    </>
  );
}
