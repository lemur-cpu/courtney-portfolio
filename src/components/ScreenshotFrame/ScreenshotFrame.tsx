import styles from "./ScreenshotFrame.module.css";

export default function ScreenshotFrame({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={styles.outer}>{children}</div>;
}
