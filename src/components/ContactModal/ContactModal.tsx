"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./ContactModal.module.css";

const EMAIL = "courtney.quinn320@gmail.com";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [copied, setCopied] = useState(false);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  function handleCopy() {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            className={styles.panel}
            role="dialog"
            aria-modal="true"
            aria-label="Contact"
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <button
              type="button"
              className={styles.close}
              onClick={onClose}
              aria-label="Close contact modal"
            >
              ×
            </button>

            <h2 className={styles.heading}>Get in touch</h2>
            <p className={styles.subtext}>
              I&rsquo;m open to full-time roles, freelance projects, and
              interesting conversations.
            </p>

            <div className={styles.emailRow}>
              <span className={styles.email}>{EMAIL}</span>
              <button
                type="button"
                className={styles.copyButton}
                onClick={handleCopy}
              >
                {copied ? "Copied ✓" : "Copy"}
              </button>
            </div>

            <hr className={styles.divider} />

            <div className={styles.linksRow}>
              <a
                href="https://www.linkedin.com/in/courtney-q/"
                className={styles.externalLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://github.com/lemur-cpu"
                className={styles.externalLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
