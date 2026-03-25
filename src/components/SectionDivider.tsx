import { motion } from "framer-motion";

const SectionDivider = () => (
  <div className="flex justify-center py-2">
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="h-px w-32 bg-gradient-to-r from-transparent via-primary/40 to-transparent origin-center"
    />
  </div>
);

export default SectionDivider;
