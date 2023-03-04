import { motion } from "framer-motion";

const boneVariants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: { ease: "easeOut", duration: 0.5, delay: 0.4 }
  },
  hidden: {
    opacity: 0,
    scale: 1.5
  }
};

export default function Bone({ animateControl }) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="124.628"
      height="130.071"
      viewBox="0 0 124.628 130.071"
      className="bone"
      animate={animateControl}
      initial="hidden"
      variants={boneVariants}
    >
      <g transform="translate(0.525 0.5)">
        <path
          d="M149.776,463.893l-20.71-1.947c14.555,4.654,55.368,17.736,57.056,18.775,2.057,1.268,9.333,10.52,11.784,11.547s9.091-4.98,10.279-7.432-3.635-13.206-3.635-13.206a19.523,19.523,0,0,0,5.612-3.423c2.057-2.036,1.739-7.967,1.107-9.074s-7.339-4.73-7.339-4.73-11.878,10.181-16.544,10.605c-3.215.293-27.073-8.688-41.6-14.3l-1.077.776-16.133-3.415,21.2,11.271-8.84-.411Z"
          transform="translate(-88.155 -363.322)"
          fill="#fff"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="1"
        />
        <path
          d="M368.892,224.819s13.206,5.226,15.577,8.4,8.51,48.4,8.51,48.4l1.362-4.866,3.635,19.183.136-8.1-.5-1.188-.742-19.268,3.517,5.247V262.8l6.686,13.952c0-3.313-9.774-48.529-9.316-50.574s2.5-14.771,2.5-14.771-7.046-4.089-9.091-4.089-9.769,9.091-9.769,9.091a16.908,16.908,0,0,0-4.089-2.728c-1.82-.683-8.408,2.728-8.408,2.728a9.832,9.832,0,0,1,0,4.089A11.24,11.24,0,0,0,368.892,224.819Z"
          transform="translate(-368.69 -207.32)"
          fill="#fff"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="1"
        />
        <path
          d="M368.557,434.026v6.811l-4.3-1.792Z"
          transform="translate(-332.703 -349.824)"
          fill="#fff"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="1"
        />
        <path
          d="M391.718,464.783l5.735-2.868v6.81Z"
          transform="translate(-371.677 -367.357)"
          fill="#fff"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="1"
        />
        <path
          d="M391.734,429.894v1.117l-.745-.559Z"
          transform="translate(-366.178 -346.768)"
          fill="#fff"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="1"
        />
        <path
          d="M398.571,423.04c.745-.075.857.708.857.857a.73.73,0,0,1-.857.6c-.6-.112-.558-.437-.558-.721S398.571,423.04,398.571,423.04Z"
          transform="translate(-373.49 -342.498)"
          fill="#fff"
          stroke="#fff"
          strokeWidth="1"
        />
        <path
          d="M368.69,342.687l.742,19.267.5,1.188.093-5.756,2.045,2.27,1.362-3.406,3.865,13.4s1.591-14.279,1.591-17.592l-6.686-13.952v9.825Z"
          transform="translate(-344.122 -291.02)"
          fill="#fff"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="1"
        />
        <path
          d="M286.05,454.759l-4.111.081s1.926.615,5.1,1.625l20.71,1.947-8.84-4.963,8.84.411-21.2-11.271L302.679,446l1.077-.776c-6.562-2.537-11.22-4.386-11.22-4.386l1.5,2.452L277.35,438.55l13.443,7.432-2.685.789.708,1.9L274.66,445.9Z"
          transform="translate(-236.501 -353.929)"
          fill="#fff"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="1"
        />
      </g>
    </motion.svg>
  );
}
