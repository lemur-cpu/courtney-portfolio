"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./KeystrokeFeature.module.css";

interface KeystrokeFeatureProps {
  imageSrc: string;
  imageAlt: string;
}

const EASE = [0.77, 0, 0.175, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: EASE, delay },
});

export default function KeystrokeFeature({
  imageSrc,
  imageAlt,
}: KeystrokeFeatureProps) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.div className={styles.image} {...fadeUp(0)}>
          {imageSrc && (
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 55vw"
              className={styles.imageEl}
            />
          )}
        </motion.div>

        <motion.div className={styles.text} {...fadeUp(0.15)}>
          <span className={styles.label}>Side Project</span>
          <h2 className={styles.title}>Keystroke</h2>
          <p className={styles.description}>
            A browser-based writing tool I built because I wanted one. Three
            writing modes, Web Audio API sound engine, session replay, and a
            Library, all in vanilla JavaScript with no dependencies.
          </p>
          <p className={styles.stack}>
            Vanilla JS · Web Audio API · CSS Custom Properties · localStorage
          </p>
          <div className={styles.links}>
            <a href="/work/keystroke" className={styles.linkAccent}>
              Case study →
            </a>
            <a
              href="https://github.com/lemur-cpu/Keystroke"
              className={styles.linkMuted}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
