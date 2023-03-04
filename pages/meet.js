import NavBarW from "../components/NavbarWhite";
import ShieldWC from "../components/svg/shieldw";
import { motion } from "framer-motion";
import {
  pageVariants,
  fadeInZoomOutVariants,
  fadeInZoomInVariants,
  avatarVariant
} from "../components/variants";
import { useState, useEffect } from "react";
import debounce from "lodash.debounce";

export default function Meet({}) {
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

  return (
    <>
      <title>The Community | No Off Season</title>
      <motion.div
        className="meetParent blueGradient"
        variants={pageVariants}
        initial="hidden"
        animate="visible"
      >
        <NavBarW active={1} isMobile={windowMobile} />
        <motion.h1 className="fs textW xlarge" variants={fadeInZoomOutVariants}>
          Your guides to your Goals
        </motion.h1>
        <motion.h2 className="fs thin textW large" variants={fadeInZoomOutVariants}>
          We remove all the guesswork for you
        </motion.h2>
        <motion.div className="avatarParent" variants={pageVariants}>
          <motion.div className="brannon" variants={pageVariants}>
            <motion.div className="brannonPng" variants={fadeInZoomOutVariants}></motion.div>
            <motion.p className="fs textW xlarge italic condensed" variants={fadeInZoomOutVariants}>
              Brannon Willisson
            </motion.p>
            <motion.p className="fs textW large thin condensed" variants={fadeInZoomOutVariants}>
              Trainer | <span className="noLineBreak">Co-Owner</span>
            </motion.p>
          </motion.div>
          <motion.div className="gavin" variants={pageVariants}>
            <motion.div className="gavinPng" variants={fadeInZoomOutVariants}></motion.div>
            <motion.p className="fs textW xlarge italic condensed" variants={fadeInZoomOutVariants}>
              Gavin Willisson
            </motion.p>
            <motion.p className="fs textW large thin condensed" variants={fadeInZoomOutVariants}>
              Trainer | <span className="noLineBreak">Co-Owner</span>
            </motion.p>
          </motion.div>
        </motion.div>
        <motion.div className="textboxGavPic" variants={avatarVariant}>
          <motion.h1 className="fs textW xxlarge italic condensed" variants={fadeInZoomOutVariants}>
            Gavin Willisson
          </motion.h1>
        </motion.div>
        <motion.div className="textBoxGavCandidA"></motion.div>
        <motion.div className="textboxGav" variants={fadeInZoomOutVariants}>
          <motion.div className="wrapper" variants={fadeInZoomInVariants}></motion.div>
          <motion.p className="zs medium-large" variants={fadeInZoomInVariants}>
            There was a guy named JD McDuffy who used to pick us up from school and take us to a
            gym. He showed me and my brother Brannon what a relationship with Christ looked like.
            Ever since then, we&#39;ve wanted to open a gym together. We have seen God do great
            things in this gym to allow it to happen. From being funded by a guy we had only known
            for a few months to the step by step oddities that have led to what we are today, The
            Lord has allowed us to do what we enjoy doing: train all ages for great things in life
            and pour into their lives even outside of the gym.
          </motion.p>
          <motion.p className="zs medium-large" variants={fadeInZoomInVariants}>
            We are faith-based for the same reason that we go to seminars every year and stay up to
            date on all of the top training and nutrition studies in the world: we don&#39;t want to
            waste your time. We realize the physical can be taken at any moment and the only thing
            that gives us lasting hope is the blood of Christ. God is the same yesterday, today, and
            forevermore. He is the only thing unchanging in our lives and his past promises have
            been true and his future promises will come to fruition.
          </motion.p>
          <motion.div className="textBoxGavCandidB"></motion.div>
        </motion.div>
        <motion.div className="textboxBraPic" variants={avatarVariant}>
          <motion.h1 className="fs textW xxlarge italic condensed" variants={fadeInZoomOutVariants}>
            Brannon Willisson
          </motion.h1>
        </motion.div>
        <motion.div className="textBoxBraCandidA"></motion.div>
        <motion.div className="textboxBra" variants={fadeInZoomOutVariants}>
          <motion.div className="wrapper" variants={fadeInZoomOutVariants}></motion.div>
          <motion.p className="zs medium-large" variants={fadeInZoomInVariants}>
            When Gavin and I were growing up we always had a dream of opening a gym and calling it
            No Off Season. We wanted to have a place where kids in the community could come and get
            better at their sports but also grow in a relationship with Christ. I wanted to invest
            in the kids and local community the way a mentor of mine did for me.
          </motion.p>
          <motion.p className="zs medium-large" variants={fadeInZoomInVariants}>
            There&#39;s such a big connection between physical training and our spiritual lives and
            that interested me from a young age. I saw there was a more than just practice that went
            into being the best athlete I could be. Likewise, it takes work and discipline to grow
            in our faith.{" "}
          </motion.p>
          <motion.p className="zs medium-large" variants={fadeInZoomInVariants}>
            When I finished my Masters&#39; in Exercise Physiology at USA, I began training athletes
            in the local school systems and soon after, opened No Off Season with another partner.
            Sadly, within six months, my partner&#39;s father was diagnosed with throat cancer,
            forcing my partner to move back to his hometown in Illinois. I had to take on full
            responsibility of the gym until Gavin was able to join in a few years. The Lord has
            certainly been with us throughout this journey and I owe all my success to God. I am
            very grateful to be able to help people achieve their goals on and off the field.
          </motion.p>
          <motion.div className="textBoxBraCandidB"></motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}
