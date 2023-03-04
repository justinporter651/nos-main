export function textVariants(delayTime) {
  return {
    visible: {
      opacity: 1,
      scale: 1,
      transition: { ease: "easeOut", duration: 0.5, delay: delayTime }
    },
    hoverOff: {
      scale: 1,
      transition: { ease: "easeOut", duration: 0.5, delay: 0 }
    },
    hoverOn: {
      scale: 1.2,
      transition: { ease: "easeOut", duration: 0.2 }
    },
    hidden: { opacity: 0, scale: 1.1 }
  };
}

export function buttonVariants(delayTime) {
  return {
    visible: {
      opacity: 1,
      scale: 1,
      transition: { ease: "easeOut", duration: 0.5, delay: delayTime }
    },
    hoverOff: {
      scale: 1,
      transition: { ease: "easeOut", duration: 0.5, delay: 0 }
    },
    hoverOn: {
      scale: 1.2,
      boxShadow: "0 0 3px 1px #fff",
      transition: { ease: "easeOut", duration: 0.2 }
    },
    hidden: { opacity: 0, scale: 1.1 }
  };
}

export const boxVariants = {
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { delayChildren: 1, duration: 0.5, ease: "easeInOut" }
  },
  hidden: { opacity: 0, scale: 0.8, rotate: 15 }
};

export const pageVariants = {
  visible: {
    transition: { staggerChildren: 0.15, ease: "easeInOut", duration: 0.5 }
  },
  hidden: {}
};

export const avatarVariant = {
  visible: {
    scale: 1,
    opacity: 1,
    y: "50%",
    transition: { ease: "easeInOut", duration: 0.5, staggerChildren: 0.2 }
  },
  hidden: {
    opacity: 0,
    scale: 1.1,
    y: "50%"
  }
};

export const fadeInZoomOutVariants = {
  visible: {
    scale: 1,
    opacity: 1,
    transition: { ease: "easeInOut", duration: 0.5 }
  },
  hidden: {
    opacity: 0,
    scale: 1.1
  }
};

export const fadeInZoomInVariants = {
  visible: {
    scale: 1,
    opacity: 1,
    transition: { when: "beforechildren", staggerChildren: 0.1, ease: "easeInOut" }
  },
  hidden: {
    opacity: 0,
    scale: 0.9
  }
};
