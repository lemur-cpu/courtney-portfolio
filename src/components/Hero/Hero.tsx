"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useContact } from "../ContactModal/ContactProvider";
import styles from "./Hero.module.css";

const EASE = [0.77, 0, 0.175, 1] as const;
const DURATION = 0.7;

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const { openContact } = useContact();

  const clipVariant = (delay: number) =>
    prefersReducedMotion
      ? {
          initial: { opacity: 0 },
          animate: {
            opacity: 1,
            transition: { duration: 0.01 },
          },
        }
      : {
          initial: { clipPath: "inset(0 100% 0 0)" },
          animate: {
            clipPath: "inset(0 0% 0 0)",
            transition: { duration: DURATION, ease: EASE, delay },
          },
        };

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h1 id="hero-name" className={styles.name}>
          <span className={styles.wordWrap}>
            <motion.span className={styles.word} {...clipVariant(0.1)}>
              Courtney
            </motion.span>
          </span>{" "}
          <span className={styles.wordWrap}>
            <motion.span className={styles.word} {...clipVariant(0.25)}>
              Quinn
            </motion.span>
          </span>
        </h1>
        <div className={styles.sublines}>
          <motion.div className={styles.subline} {...clipVariant(0.5)}>
            AI software engineer. Currently building at Autonomous Cyber.
          </motion.div>
        </div>
        <motion.div className={styles.ctaGroup} {...clipVariant(0.65)}>
          <a href="#work" className={styles.ctaPrimary}>
            Selected Work
          </a>
          <button
            type="button"
            className={styles.ctaSecondary}
            onClick={openContact}
          >
            Contact
          </button>
        </motion.div>
      </div>
    </section>
  );
}
