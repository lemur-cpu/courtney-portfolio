"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
  const [showCQ, setShowCQ] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  useEffect(() => {
    const heroName = document.getElementById("hero-name");

    if (!heroName) {
      setShowCQ(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowCQ(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(heroName);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.inner}>
          <Link
            href="/"
            className={styles.wordmark}
            style={{
              opacity: showCQ ? 1 : 0,
              pointerEvents: showCQ ? "auto" : "none",
            }}
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
          <button
            type="button"
            className={styles.menuButton}
            aria-label="Open navigation menu"
            onClick={() => setMenuOpen(true)}
          >
            Menu
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <button
              type="button"
              className={styles.overlayClose}
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              ×
            </button>
            <nav className={styles.overlayNav}>
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className={styles.overlayLink}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              ))}
              <button
                type="button"
                className={styles.overlayButton}
                onClick={() => {
                  setMenuOpen(false);
                  setIsContactOpen(true);
                }}
              >
                Contact
              </button>
              <a
                href="/resume"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.overlayLink}
                onClick={() => setMenuOpen(false)}
              >
                Resume
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
}
