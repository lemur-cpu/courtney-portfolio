import styles from "./ScreenshotFrame.module.css";

export default function ScreenshotFrame({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.outer}>
      <div className={styles.chrome} aria-hidden="true">
        <div className={styles.dot} style={{ backgroundColor: "#EC6A5E" }} />
        <div className={styles.dot} style={{ backgroundColor: "#F4BE4F" }} />
        <div className={styles.dot} style={{ backgroundColor: "#61C554" }} />
      </div>
      {children}
    </div>
  );
}
