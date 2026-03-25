import { motion } from "framer-motion";
import { Award, Briefcase, Users } from "lucide-react";

const achievements = [
  "2nd position in Model Making Competition under ACM (2024)",
  "Participation in Venture Craft by Dept. of CS & Business System at OIST Bhopal (2025)",
  "Participation in Project Idea Competition – Savishkar Madhya Bharat at MPCST",
  "Introduction to IoT and Digital Transformation – Cisco (2025)",
  "Participation Hackathon (2025)",
  "Website Development Tutorial Course – Infosys Springboard (2025)",
  "Introduction to Machine Learning – Infosys Springboard (2025)",
  "Presentation Skills Course – TCS iON (2025)",
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -15 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const AchievementsSection = () => {
  return (
    <section id="achievements" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-4xl font-bold text-center mb-12 gradient-text"
        >
          Achievements & Experience
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
            className="glass-card p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <motion.div whileHover={{ rotate: 20 }}>
                <Award className="text-primary" size={20} />
              </motion.div>
              <h3 className="font-display font-semibold text-foreground text-lg">Achievements</h3>
            </div>
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-3"
            >
              {achievements.map((a, i) => (
                <motion.li
                  key={i}
                  variants={itemVariants}
                  whileHover={{ x: 6 }}
                  className="text-muted-foreground text-sm flex gap-2 cursor-default"
                >
                  <span className="text-accent mt-0.5">▹</span>
                  {a}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {[
              {
                icon: Briefcase,
                title: "Internship",
                content: (
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Two-week internship on web development associated with <span className="text-foreground">Code Thinker</span> at OIST Bhopal (2025). Gained hands-on experience building modern web applications.
                  </p>
                ),
              },
              {
                icon: Users,
                title: "Leadership",
                content: (
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li className="flex gap-2"><span className="text-accent">▹</span>Head volunteer at placement drive of TCS 2025–2026</li>
                    <li className="flex gap-2"><span className="text-accent">▹</span>Placement management head in IBM Drive 2026</li>
                  </ul>
                ),
              },
            ].map((card) => (
              <motion.div
                key={card.title}
                variants={cardVariants}
                whileHover={{ scale: 1.02, x: 4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass-card p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <motion.div whileHover={{ rotate: 15 }}>
                    <card.icon className="text-primary" size={20} />
                  </motion.div>
                  <h3 className="font-display font-semibold text-foreground text-lg">{card.title}</h3>
                </div>
                {card.content}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
