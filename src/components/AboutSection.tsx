import { motion } from "framer-motion";
import { GraduationCap, Code, Brain } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-4xl font-bold text-center mb-12 gradient-text"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              <>I'm a B.Tech Information Technology student at <span className="text-foreground font-medium">Oriental Institute of Science and Technology, Bhopal</span> (2023–2027) with a current CGPA of 7.61.</>,
              "Passionate about building full-stack web applications, exploring AI-powered solutions, and working with data analytics to create impactful digital experiences.",
              "Previously completed XII (CBSE) from BEHS Sumati Academy Chhatarpur, M.P (78%, 2022) and X (CBSE) from Delhi Public School Chhatarpur, M.P (77%, 2020).",
            ].map((text, i) => (
              <motion.p key={i} variants={itemVariants} className="text-muted-foreground leading-relaxed mb-4">
                {text}
              </motion.p>
            ))}
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-4"
          >
            {[
              { icon: Code, title: "Web Development", desc: "Full-stack apps with React, Node.js, FastAPI" },
              { icon: Brain, title: "AI & NLP", desc: "Sentiment analysis, NLP models, intelligent platforms" },
              { icon: GraduationCap, title: "Data Analytics", desc: "Power BI, Excel, data-driven insights" },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ scale: 1.03, x: 6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass-card p-5 flex items-start gap-4 cursor-default"
              >
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className="p-2 rounded-lg bg-primary/10 text-primary"
                >
                  <item.icon size={22} />
                </motion.div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
