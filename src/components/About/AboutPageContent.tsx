"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "../Footer/Footer";
import styles from "./AboutPage.module.css";

const EASE = [0.77, 0, 0.175, 1] as const;

const fadeUp = (delay: number, y = 16, duration = 0.4) => ({
  initial: { opacity: 0, y },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 as const },
  transition: { duration, ease: EASE, delay },
});

const fadeLeft = (delay: number) => ({
  initial: { opacity: 0, x: -16 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.1 as const },
  transition: { duration: 0.5, ease: EASE, delay },
});

const NOW_CARDS = [
  { label: "ROLE", value: "Software Engineer I at Wayfair" },
  { label: "BUILDING", value: "Keystroke — browser-based writing tool" },
  { label: "LOCATION", value: "Boston, MA" },
  { label: "OPEN TO", value: "Full-time roles & interesting projects" },
];

const LINKS = [
  { label: "GitHub ↗", href: "https://github.com/lemur-cpu", external: true },
  {
    label: "LinkedIn ↗",
    href: "https://www.linkedin.com/in/courtney-q/",
    external: true,
  },
  { label: "Email", href: "mailto:courtney.quinn320@gmail.com", external: false },
  { label: "Resume ↗", href: "/resume", external: true },
];

export default function AboutPageContent() {
  return (
    <>
      <div className={styles.wrapper}>
        <motion.header className={styles.header} {...fadeUp(0, 20, 0.5)}>
          <div className={styles.headerText}>
            <h1 className={styles.heading}>About</h1>
            <p className={styles.subheading}>
              Courtney Quinn · Full-stack engineer
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

        <div className={styles.bio}>
          <motion.p className={styles.body} {...fadeUp(0)}>
            I&rsquo;m a full-stack software engineer at Wayfair, working on the
            Project Shopping team. My work spans GraphQL schema design, Node.js
            backend services, and React frontend, end-to-end. It&rsquo;s how I
            prefer it.
          </motion.p>
          <motion.p className={styles.body} {...fadeUp(0.1)}>
            I studied Computer Science at Virginia Tech, graduating{" "}
            <em>cum laude</em> in 2025. Before Wayfair I worked at the Naval
            Warfare Center and spent time as a Machine Learning fellow at Cornell
            Tech&rsquo;s Break Through Tech AI program.
          </motion.p>
          <motion.p className={styles.body} {...fadeUp(0.2)}>
            I care about the gap between a good design and a shipped one. Most
            of my best technical decisions have been about what not to build —
            keeping systems small, interfaces clear, and implementations honest.
          </motion.p>
        </div>

        <motion.div className={styles.pullQuote} {...fadeLeft(0)}>
          <p className={styles.pullQuoteText}>
            Writing and building are the same thing in different materials.
          </p>
        </motion.div>

        <div className={styles.section}>
          <motion.p className={styles.label} {...fadeUp(0)}>Now</motion.p>
          <div className={styles.nowGrid}>
            {NOW_CARDS.map(({ label, value }, i) => (
              <motion.div
                key={label}
                className={styles.nowCard}
                {...fadeUp(i * 0.05, 12)}
              >
                <span className={styles.nowCardLabel}>{label}</span>
                <span className={styles.nowCardValue}>{value}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <motion.p className={styles.label} {...fadeUp(0)}>Elsewhere</motion.p>
          <div className={styles.links}>
            {LINKS.map(({ label, href, external }) => (
              <a
                key={label}
                href={href}
                className={styles.link}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
