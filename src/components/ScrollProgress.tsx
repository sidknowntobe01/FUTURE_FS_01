import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      style={{ scaleX, transformOrigin: "left" }}
      className="fixed top-0 left-0 right-0 h-[3px] z-[60]"
      // gradient via inline style since it's a unique decorative element
      data-role="scroll-indicator"
    >
      <div className="w-full h-full bg-gradient-to-r from-primary via-secondary to-accent" />
    </motion.div>
  );
};

export default ScrollProgress;
