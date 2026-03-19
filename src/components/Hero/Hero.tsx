"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.css";

const EASE = [0.77, 0, 0.175, 1] as const;
const DURATION = 0.7;

const clipVariant = (delay: number) => ({
  initial: { clipPath: "inset(0 100% 0 0)" },
  animate: {
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: DURATION, ease: EASE, delay },
  },
});

export default function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h1 id="hero-name" className={styles.name}>
          <span className={styles.wordWrap}>
            <motion.span className={styles.word} {...clipVariant(0.1)}>
              Courtney
            </motion.span>
          </span>
          {" "}
          <span className={styles.wordWrap}>
            <motion.span className={styles.word} {...clipVariant(0.25)}>
              Quinn
            </motion.span>
          </span>
        </h1>
        <div className={styles.sublines}>
          <motion.div className={styles.subline} {...clipVariant(0.5)}>
            Full-stack software engineer.
          </motion.div>
          <motion.div className={styles.subline} {...clipVariant(0.65)}>
            Currently building at Wayfair in Boston.
          </motion.div>
        </div>
      </div>
    </section>
  );
}
