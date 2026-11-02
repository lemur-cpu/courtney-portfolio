"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import styles from "./WorkSection.module.css";

export default function WorkSection({
  children,
}: {
  children: React.ReactNode;
}) {
  const prefersReducedMotion = useReducedMotion();

  const indexedChildren = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      const num = String(index + 1).padStart(2, "0");
      const indexedChild = React.cloneElement(
        child as React.ReactElement<{ index: number; number: string }>,
        { index, number: num }
      );
      return <div className={styles.cardWrapper}>{indexedChild}</div>;
    }
    return child;
  });

  return (
    <section className={styles.section} id="work">
      <div className={styles.inner}>
        <h2 className={styles.heading}>Selected Work</h2>
        <p className={styles.subtitle}>
          Selected projects, production work and personal tools.
        </p>
        <motion.div
          className={styles.grid}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={
            prefersReducedMotion
              ? { duration: 0.01 }
              : { duration: 0.5, ease: [0.77, 0, 0.175, 1] }
          }
        >
          {indexedChildren}
        </motion.div>
      </div>
    </section>
  );
}
