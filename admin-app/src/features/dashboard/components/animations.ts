export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren" as const,
      staggerChildren: 0.1,
      delayChildren: 0.2,
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      when: "afterChildren" as const,
      staggerChildren: 0.05,
      staggerDirection: -1 as const,
      duration: 0.2,
    },
  },
};


// Slide in animations
export const slideInVariants = {
  initial: (i: number) => ({
    opacity: 0,
    y: 20,
    transition: {
      delay: i * 0.1,
    },
  }),
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut" as const,
    },
  }),
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeIn" as const,
    },
  },
};