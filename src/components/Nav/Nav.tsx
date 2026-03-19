"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ContactModal from "../ContactModal/ContactModal";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import styles from "./Nav.module.css";

const NAV_LINKS = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/about" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [heroNameVisible, setHeroNameVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const el = document.getElementById("hero-name");
    if (!el) {
      setHeroNameVisible(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setHeroNameVisible(entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.inner}>
          <Link
            href="/"
            className={`${styles.wordmark} ${heroNameVisible ? "" : styles.wordmarkVisible}`}
          >
            CQ
          </Link>
          <div className={styles.right}>
            <ThemeToggle />
            <nav className={styles.links}>
              {NAV_LINKS.map(({ label, href }) => (
                <a key={label} href={href} className={styles.link}>
                  {label}
                </a>
              ))}
              <button
                type="button"
                className={styles.contactButton}
                onClick={() => setIsContactOpen(true)}
              >
                Contact
              </button>
            </nav>
          </div>
          <button type="button" className={styles.menuButton} aria-label="Open navigation menu">
            Menu
          </button>
        </div>
      </header>

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
}
