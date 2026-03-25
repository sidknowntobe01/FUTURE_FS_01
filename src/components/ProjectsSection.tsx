import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "2ndHOME",
    subtitle: "Student Rental & Housing Management System (2025)",
    description:
      "A web-based platform to help students find verified rental accommodation without brokers. Features student registration, property listing, search filtering, booking management, and admin panel.",
    tech: ["HTML", "CSS", "JavaScript", "FastAPI", "MySQL"],
    github: "https://github.com/sidknowntobe01",
  },
  {
    title: "Medi-Connect",
    subtitle: "Connecting Patients, Data, and Doctors (2024)",
    description:
      "An end-to-end database-focused portal for patient registration, information management, and appointment scheduling with healthcare professionals.",
    tech: ["MySQL", "Node.js", "JavaScript", "HTML", "CSS", "Bootstrap"],
    github: "https://github.com/sidknowntobe01",
  },
  {
    title: "SamvaadSetu",
    subtitle: "Sentiment Analysis via EConsultation Module (2025)",
    description:
      "An AI-powered web platform for intelligent sentiment analysis and automatic summarization of citizen feedback using NLP and transformer models.",
    tech: ["FastAPI", "Tailwind CSS", "Hugging Face", "MongoDB", "JavaScript"],
    github: "https://github.com/sidknowntobe01",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, rotateX: 5 },
  visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-4xl font-bold text-center mb-12 gradient-text"
        >
          Projects
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((p) => (
            <motion.div
              key={p.title}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="glass-card p-6 flex flex-col group"
            >
              <motion.h3
                className="font-display text-xl font-bold text-foreground mb-1"
                whileHover={{ x: 4 }}
              >
                {p.title}
              </motion.h3>
              <p className="text-xs text-primary mb-3">{p.subtitle}</p>
              <p className="text-muted-foreground text-sm flex-1 mb-4 leading-relaxed">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t) => (
                  <motion.span
                    key={t}
                    whileHover={{ scale: 1.1 }}
                    className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
              <div className="flex gap-3">
                <motion.a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 3 }}
                  className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
                >
                  <Github size={14} /> GitHub
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ x: 3 }}
                  className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline"
                >
                  <ExternalLink size={14} /> Demo
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
