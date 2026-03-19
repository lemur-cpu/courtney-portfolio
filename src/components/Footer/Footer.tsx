import styles from "./Footer.module.css";

const LINKS = [
  { label: "Email", href: "mailto:courtney.quinn320@gmail.com", external: false },
  { label: "GitHub", href: "https://github.com/lemur-cpu", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/courtney-q/", external: true },
  { label: "Resume ↗", href: "/resume", external: false },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.copy}>© 2026 Courtney Quinn</span>
        <nav className={styles.links}>
          {LINKS.map(({ label, href, external }) => (
            <a
              key={label}
              href={href}
              className={styles.link}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
