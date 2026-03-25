import { motion } from "framer-motion";

const skills = [
  { name: "Java", icon: "☕" },
  { name: "JavaScript", icon: "⚡" },
  { name: "HTML", icon: "🌐" },
  { name: "CSS", icon: "🎨" },
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "FastAPI", icon: "🚀" },
  { name: "MySQL", icon: "🗄️" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Power BI", icon: "📊" },
  { name: "Excel", icon: "📈" },
  { name: "Tailwind CSS", icon: "💨" },
  { name: "Bootstrap", icon: "🅱️" },
  { name: "Graphic Design", icon: "🖌️" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.7, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring" as const, stiffness: 200, damping: 15 } },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-4xl font-bold text-center mb-12 gradient-text"
        >
          Technical Skills
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{
                scale: 1.1,
                y: -8,
                rotateZ: 2,
                transition: { type: "spring", stiffness: 400, damping: 15 },
              }}
              whileTap={{ scale: 0.95 }}
              className="glass-card p-5 flex flex-col items-center gap-3 cursor-default"
            >
              <motion.span
                className="text-3xl"
                whileHover={{ scale: 1.3, rotate: 15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {skill.icon}
              </motion.span>
              <span className="text-sm font-medium text-foreground">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
