import { motion } from "framer-motion";

const Footer = () => (
  <motion.footer
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="border-t border-border py-8 text-center"
  >
    <p className="text-sm text-muted-foreground">
      Designed & Developed by{" "}
      <span className="gradient-text font-medium">Siddharth Singh Yadav</span>
    </p>
    <p className="text-xs text-muted-foreground/50 mt-1">© 2025 All rights reserved.</p>
  </motion.footer>
);

export default Footer;
