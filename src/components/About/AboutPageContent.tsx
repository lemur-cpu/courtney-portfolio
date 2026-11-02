"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Footer from "../Footer/Footer";
import styles from "./AboutPage.module.css";

const NOW_ITEMS = [
  { label: "Role", value: "AI Software Engineer at Autonomous Cyber" },
  { label: "Building", value: "Keystroke — browser-based writing tool" },
  { label: "Location", value: "Denver, CO" },
  { label: "Open to", value: "Interesting projects & collaborations" },
];

const SKILLS = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Java", "C++"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "GraphQL (Apollo)", "HTML", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "GraphQL APIs", "RESTful services", "MCP"],
  },
  {
    category: "AI & Agents",
    items: [
      "LLM agents",
      "Local / on-device models",
      "Model routing & eval",
      "Speech (ASR)",
    ],
  },
  {
    category: "Databases",
    items: ["MySQL", "SQL", "Firebase"],
  },
  {
    category: "Cloud & DevOps",
    items: [
      "AWS",
      "Docker",
      "Kubernetes",
      "SSH / WinRM",
      "CI/CD (Buildkite, Jenkins)",
    ],
  },
  {
    category: "Tools",
    items: ["Git", "Figma", "Datadog", "Cypress", "Playwright", "VS Code APIs"],
  },
  {
    category: "Machine Learning",
    items: ["Feature Engineering", "Model Evaluation", "XGBoost", "SHAP"],
  },
];

export default function AboutPageContent() {
  const prefersReducedMotion = useReducedMotion();

  const sectionMotion = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 12 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.15 as const },
        transition: { duration: 0.4, ease: [0.77, 0, 0.175, 1] as const },
      };

  return (
    <>
      <div className={styles.wrapper}>
        <motion.header className={styles.header} {...sectionMotion}>
          <div className={styles.headerText}>
            <h1 className={styles.heading}>About</h1>
            <p className={styles.subheading}>
              Courtney Quinn · AI software engineer
            </p>
          </div>
          <div className={styles.headshot}>
            <Image
              src="/images/headshot.jpg"
              alt="Courtney Quinn"
              fill
              className={styles.headshotImg}
            />
          </div>
        </motion.header>

        <motion.div className={styles.bio} {...sectionMotion}>
          <p className={styles.body}>
            I&rsquo;m an AI software engineer at Autonomous Cyber. Before that I
            was a full-stack engineer at Wayfair on the Project Shopping team,
            owning features end-to-end across GraphQL, Node.js, and React.
          </p>
          <p className={styles.body}>
            I studied Computer Science at Virginia Tech, graduating{" "}
            <em>cum laude</em> in 2025. Before Wayfair, I worked at the Naval
            Warfare Center and spent time as a Machine Learning fellow at Cornell
            Tech&rsquo;s Break Through Tech AI program.
          </p>
          <p className={styles.body}>
            I care about the gap between a good design and a shipped one. Most of
            my best technical decisions have been about what not to build: keeping
            systems small and interfaces clear.
          </p>
        </motion.div>

        <motion.div className={styles.pullQuote} {...sectionMotion}>
          <p className={styles.pullQuoteText}>
            Writing and building are the same thing in different materials.
          </p>
        </motion.div>

        <motion.div className={styles.section} {...sectionMotion}>
          <p className={styles.label}>Now</p>
          <dl className={styles.nowList}>
            {NOW_ITEMS.map(({ label, value }) => (
              <div key={label} className={styles.nowRow}>
                <dt className={styles.nowCardLabel}>{label}</dt>
                <dd className={styles.nowCardValue}>{value}</dd>
              </div>
            ))}
          </dl>
          <div className={styles.resumeRow}>
            <span className={styles.resumeCardPrompt}>
              Want the full picture?
            </span>
            <a
              href="/resume"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.resumeLink}
            >
              View Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          className={`${styles.section} ${styles.skillsSection}`}
          {...sectionMotion}
        >
          <p className={styles.label}>Skills</p>
          <div className={styles.skillsGrid}>
            {SKILLS.map(({ category, items }) => (
              <div key={category} className={styles.skillGroup}>
                <p className={styles.skillCategory}>{category}</p>
                {items.map((item) => (
                  <p key={item} className={styles.skillItem}>
                    {item}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <Footer />
    </>
  );
}
