"use client";

import { useTheme } from "./ThemeProvider";
import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      role="switch"
      aria-checked={theme === "dark"}
      aria-label="Toggle dark mode"
      onClick={toggleTheme}
      className={styles.toggle}
      data-theme-active={theme === "dark" ? "true" : "false"}
    >
      <span className={styles.indicator} />
    </button>
  );
}
