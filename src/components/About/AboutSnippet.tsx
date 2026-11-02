"use client";

import { motion, useReducedMotion } from "framer-motion";
import styles from "./AboutSnippet.module.css";

export default function AboutSnippet() {
  const prefersReducedMotion = useReducedMotion();

  const sectionMotion = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5, ease: [0.77, 0, 0.175, 1] as const },
      };

  return (
    <section className={styles.section}>
      <motion.div className={styles.inner} {...sectionMotion}>
        <div className={styles.bio}>
          <span className={styles.label}>About</span>
          <p className={styles.body}>
            I build software that&rsquo;s meant to be used by people. That means
            caring about the schema and the spacing equally.
          </p>
          <p className={styles.body}>
            Currently an AI software engineer at Autonomous Cyber. Previously
            Wayfair and Virginia Tech CS, <em>cum laude</em>.
          </p>
          <a href="/about" className={styles.more}>
            More about me →
          </a>
        </div>

        <div className={styles.quote}>
          <p className={styles.quoteText}>
            I care about the gap between a good design and a shipped one.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
