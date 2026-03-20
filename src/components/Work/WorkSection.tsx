import React from "react";
import styles from "./WorkSection.module.css";

export default function WorkSection({
  children,
}: {
  children: React.ReactNode;
}) {
  const indexedChildren = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      const num = String(index + 1).padStart(2, "0");
      const indexedChild = React.cloneElement(
        child as React.ReactElement<{ index: number; number: string }>,
        { index, number: num }
      );
      return (
        <div className={styles.cardWrapper}>
          {indexedChild}
        </div>
      );
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
        <div className={styles.grid}>{indexedChildren}</div>
      </div>
    </section>
  );
}
