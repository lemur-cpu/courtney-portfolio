import styles from "./CaseStudyLayout.module.css";

export { styles };

export default function CaseStudyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={styles.wrapper}>{children}</div>;
}
