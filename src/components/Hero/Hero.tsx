"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, Mail } from "lucide-react";
import { useContact } from "../ContactModal/ContactProvider";
import HeroAtmosphere from "./HeroAtmosphere";
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

  const atmosphereMotion = prefersReducedMotion
    ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
    : {
        initial: { opacity: 0, scale: 1.04 },
        animate: {
          opacity: 1,
          scale: 1,
          transition: { duration: 1.1, ease: EASE },
        },
      };

  return (
    <section className={styles.section}>
      <motion.div className={styles.atmosphereWrap} {...atmosphereMotion}>
        <HeroAtmosphere />
      </motion.div>
      <div className={styles.inner}>
        <motion.p className={styles.kicker} {...clipVariant(0)}>
          Portfolio
        </motion.p>
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
            <ArrowDownRight className={styles.ctaIcon} aria-hidden size={16} strokeWidth={1.75} />
          </a>
          <button
            type="button"
            className={styles.ctaSecondary}
            onClick={openContact}
          >
            <Mail className={styles.ctaIcon} aria-hidden size={15} strokeWidth={1.75} />
            Contact
          </button>
        </motion.div>
      </div>
    </section>
  );
}
