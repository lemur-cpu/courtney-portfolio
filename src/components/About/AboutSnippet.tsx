"use client";

import { motion } from "framer-motion";
import styles from "./AboutSnippet.module.css";

const EASE = [0.77, 0, 0.175, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: EASE, delay },
});

export default function AboutSnippet() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.div className={styles.bio} {...fadeUp(0)}>
          <span className={styles.label}>About</span>
          <p className={styles.body}>
            I build software that&rsquo;s meant to be used by people. That means
            caring about the schema and the spacing equally.
          </p>
          <p className={styles.body}>
            Currently a full-stack engineer at Wayfair. Previously Virginia Tech
            CS, <em>cum laude</em>.
          </p>
          <a href="/about" className={styles.more}>
            More about me →
          </a>
        </motion.div>

        <motion.div className={styles.quote} {...fadeUp(0.15)}>
          <p className={styles.quoteText}>
            I care about the gap between a good design and a shipped one.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
