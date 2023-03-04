import ShieldB from "../components/svg/shieldB";
import { useState } from "react";
import Link from "next/link";
import LinkComponent from "../components/contactUsLink";
import NavBarW from "../components/navbarWhite";
import { motion } from "framer-motion";
import debounce from "lodash.debounce";
import { useEffect } from "react";

const LandingPageHeroVar = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2, delay: 0.1 } }
};

const LandingPageChildVar = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } }
};

export default function LandingPage({}) {
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
    <main>
      <title>No Off Season</title>
      <motion.div
        className="div-block"
        variants={LandingPageHeroVar}
        initial={"hidden"}
        animate={"visible"}
      >
        <NavBarW active={0} isMobile={windowMobile} />
        <motion.p
          id="w-node-_49b21768-620f-bcf7-afcb-ec4758351492-6fcaf29d"
          className="heroheader"
          variants={LandingPageChildVar}
        >
          Don&#x27;t waste your time
          <br />
          Train Effectively
          <br />
          Be Prepared
        </motion.p>
        <motion.div className="picturecard devonpic" variants={LandingPageChildVar}></motion.div>
        <motion.div className="picturecard community1" variants={LandingPageChildVar}></motion.div>
        <motion.div className="picturecard grouppic" variants={LandingPageChildVar}></motion.div>
        <motion.div className="picturecard community2" variants={LandingPageChildVar}></motion.div>
        <motion.div className="picturecard personalpic" variants={LandingPageChildVar}></motion.div>
        <div className="lightRedFaded"></div>
        <div id="w-node-c7dde4ae-8bf5-e513-6177-f1f4926cb3e5-6fcaf29d" className="transition"></div>
      </motion.div>
      <div className="w-layout-grid grid-2 gray-gradient">
        <div id="w-node-_5845406e-3ba9-e02d-02cf-519398bec65e-6fcaf29d" className="pricing-card">
          <h1 className="card-title">Sports Performance</h1>
          <p id="w-node-_398ae39e-dd9e-ce1e-c2f0-649588576679-6fcaf29d" className="benefits">
            Speed-Specific
            <br />
            Sport-Specialized
            <br />
            Results-Based
          </p>
          <p className="audience">For those who want up-to-date sports-physiology</p>
          <p className="pricing-paragraph">
            $20/session | $250/month
            <br />
          </p>
          <p className="times-p">
            14^: 3:30-4:30 p.m.
            <br />
            13u: 4:30-5:30 p.m.
          </p>
          <LinkComponent>
            <a
              id="w-node-_70159698-aabf-0179-98a6-f8ffd988a318-6fcaf29d"
              className="contact-us-button w-button"
            >
              Get a session
            </a>
          </LinkComponent>
        </div>
        <div id="w-node-_48354e41-9953-41a7-19e1-20ef1b2302f9-6fcaf29d" className="pricing-card">
          <h1 id="w-node-f800ec22-f1af-18c1-97d9-017218b3fe71-6fcaf29d" className="card-title">
            Group Fitness
          </h1>
          <p id="w-node-_27a8c797-5bb6-7a1f-ab82-c64ee4459d5d-6fcaf29d" className="benefits">
            Health-Specific
            <br />
            Longevity-Focused
            <br />
            Results-Based
            <br />
          </p>
          <p className="audience">
            For those who sense something missing, seek healthiness, and don&#x27;t need athletic
            results
          </p>
          <p className="pricing-paragraph">$25/session</p>
          <p className="times-p">
            5:30-6:30 a.m.
            <br />
            8-9 a.m.
          </p>
          <LinkComponent>
            <a
              id="w-node-_4edebd33-8f6a-3c5c-cca5-2082093eed55-6fcaf29d"
              className="contact-us-button w-button"
            >
              Get a session
            </a>
          </LinkComponent>
        </div>
        <div id="w-node-ed00280c-cd87-8d04-dc0e-996794d74117-6fcaf29d" className="pricing-card">
          <h1 id="w-node-_2b1ac567-c7b9-08f9-3d9d-74c037b66b50-6fcaf29d" className="card-title">
            Personal Training
          </h1>
          <p id="w-node-_0766db86-ab1e-15d9-927f-cbbbba4253c3-6fcaf29d" className="benefits">
            Hyper-personal programs
            <br />
          </p>
          <p className="audience">For those who want the most constant workout review</p>
          <p className="pricing-paragraph">Prices and times vary; Contact us for more info</p>
          <LinkComponent>
            <a
              id="w-node-eed88c26-175a-b164-d34e-4485425c5c03-6fcaf29d"
              href="#"
              className="contact-us-button w-button"
            >
              Get a session
            </a>
          </LinkComponent>
        </div>
      </div>
      <div className="whosection wf-section">
        <h1 className="heading">Who are we?</h1>
        <p className="who">
          You&#x27;re probably saying,
          <br />
          &quot;Hey... man/woman... whoever you are, isn&#x27;t most of the stuff you are saying
          just buzz-words that have no meaning!?!? Also, how can you claim I&#x27;m wasting my time
          if I don&#x27;t go to you for training?!&quot;
          <br />
        </p>
        <p className="who">
          We completely understand your concern; if some random person claimed they had a completely
          new and revolutionary [insert any product here], enough red flags to fill amazon&#x27;s
          warehouses would fill our heads too. We don&#x27;t want to promise that our training is
          the only effective way to get results, but we also can&#x27;t promise other trainers put
          in as much effort to fine-tune your minutes in the gym. Now, we&#x27;re realizing, is a
          good time to introduce ourselves.
        </p>
        <p className="who">
          Hey I&#x27;m Brannon. I&#x27;m one of the trainers here. (The other one is my brother,
          actually!) There was a guy named JD McDuffy who used to pick us up from school and take us
          to a gym. He showed me and my brother Gavin what a relationship with Christ looked like.
          Ever since then, we&#x27;ve wanted to open a gym together. The impact physical training
          had on my life as a kid and young adult made me love the gym space. Pouring into kids
          physically and in life is my dream. Why does this matter? It’s not a burden to me to work
          as hard as possible to make sure you are doing everything you can to meet your goals. That
          means a masters in exercise physiology, late nights, weekend conferences, and every
          medical study on training are all included. My passion is training. I want to help you
          meet your physical and life goals as much as possible. With that being said, Gavin(my
          brother) would love to introduce himself.
          <br />
        </p>
        <p className="who">
          Hey, it&#x27;s Gavin. In middle school, what I can only explain was a God-given desire was
          laid on my heart to start a gym. I wanted to bring people from all walks of life and
          strengthen them physically, mentally, and in life. We have seen God do great things in
          this gym to allow it to happen. From being funded by a guy we had only known for a few
          months to the step by step oddities that have led to what we are today, The Lord has
          allowed us to do what we enjoy doing: train all ages for great things in life and see
          their lives grow before our eyes.
        </p>
        <p className="who">We know that got a little deep, but we love deep. Anyways… </p>
        <p className="who">
          This might not be the gym for you if you just want a simple workout that will check all
          the metaphorical boxes, or if you will have more peace of mind going to a cheaper trainer.
          (There’s nothing wrong with cheap; there&#x27;s always too much to buy and not enough to
          spend, and we know how stressful bills are!) <strong></strong>
        </p>
        <p className="who">
          <strong>
            However, if money is the only hangup, don&#x27;t hesitate to give us a call or stop by.
            We&#x27;d love to chat!
          </strong>
          <strong></strong>
        </p>
        <LinkComponent>
          <p
            id="w-node-ef13b763-4286-f94b-9351-3dcb0adf2ab0-6fcaf29d"
            className="contact-us-button moneyissue w-button"
          >
            Contact Us
          </p>
        </LinkComponent>
      </div>
      <div className="mediasection wf-section">
        <h1 id="w-node-caec70fb-edbb-b653-4b59-fff6030a0dfd-6fcaf29d" className="heading">
          Keep up with us:
        </h1>
        <div id="w-node-b299f9de-e336-16a0-cf76-67f1b997be7f-6fcaf29d" className="mediablock">
          <a href="https://www.instagram.com/n.o.s.trainingfacility/?r=nametag">
            <div className="mediaicon instagram"></div>
          </a>
          <h1 className="medianame">Instagram</h1>
        </div>
        <div id="w-node-_3376b7cd-3cca-e3a1-7e16-9dd2ceadba7b-6fcaf29d" className="mediablock">
          <a href="https://m.facebook.com/nostrainingfacility/?_rdr">
            <div className="mediaicon facebook"></div>
          </a>
          <h1 className="medianame">Facebook</h1>
        </div>
      </div>
    </main>
  );
}
