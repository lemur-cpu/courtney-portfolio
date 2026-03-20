"use client";

import { motion } from "framer-motion";
import styles from "./SkillsStrip.module.css";

const SKILLS = [
  {
    category: "LANGUAGES",
    items: ["TypeScript", "JavaScript", "Python", "Java", "C++"],
  },
  {
    category: "FRONTEND",
    items: ["React", "Next.js", "GraphQL (Apollo)", "HTML", "CSS"],
  },
  {
    category: "BACKEND",
    items: ["Node.js", "GraphQL APIs", "RESTful services"],
  },
  {
    category: "DATABASES",
    items: ["MySQL", "SQL", "Firebase"],
  },
  {
    category: "CLOUD & DEVOPS",
    items: ["AWS", "Docker", "Kubernetes", "CI/CD (Buildkite, Jenkins)"],
  },
  {
    category: "TOOLS",
    items: ["Git", "Figma", "Datadog", "Cypress", "Playwright"],
  },
  {
    category: "MACHINE LEARNING",
    items: ["Feature Engineering", "Model Evaluation"],
  },
];

export default function SkillsStrip() {
  let globalIndex = 0;

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.p
          className={styles.label}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          Skills
        </motion.p>
        <div className={styles.grid}>
          {SKILLS.map(({ category, items }) => (
            <div key={category} className={styles.group}>
              <p className={styles.category}>{category}</p>
              {items.map((item) => {
                const delay = globalIndex * 0.03;
                globalIndex += 1;
                return (
                  <motion.p
                    key={item}
                    className={styles.item}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.3, ease: "easeOut", delay }}
                  >
                    {item}
                  </motion.p>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
