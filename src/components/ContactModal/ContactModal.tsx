"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, Copy, ExternalLink, X } from "lucide-react";
import styles from "./ContactModal.module.css";

const EMAIL = "courtney.quinn320@gmail.com";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [copied, setCopied] = useState(false);
  const prefersReducedMotion = useReducedMotion();

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

  const fade = prefersReducedMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.01 },
      }
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.2 },
      };

  const panelMotion = prefersReducedMotion
    ? fade
    : {
        initial: { opacity: 0, y: -12, scale: 0.97 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: -8, scale: 0.97 },
        transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] as const },
      };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className={styles.backdrop}
            {...fade}
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            className={styles.panel}
            role="dialog"
            aria-modal="true"
            aria-label="Contact"
            {...panelMotion}
          >
            <button
              type="button"
              className={styles.close}
              onClick={onClose}
              aria-label="Close contact modal"
            >
              <X size={18} strokeWidth={1.75} />
            </button>

            <h2 className={styles.heading}>Get in touch</h2>
            <p className={styles.subtext}>
              I&rsquo;m open to interesting projects, collaborations, and
              conversations.
            </p>

            <div className={styles.emailRow}>
              <span className={styles.email}>{EMAIL}</span>
              <button
                type="button"
                className={styles.copyButton}
                onClick={handleCopy}
              >
                {copied ? (
                  <>
                    <Check size={14} strokeWidth={1.75} aria-hidden />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy size={14} strokeWidth={1.75} aria-hidden />
                    Copy
                  </>
                )}
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
                LinkedIn
                <ExternalLink size={14} strokeWidth={1.75} aria-hidden />
              </a>
              <a
                href="https://github.com/lemur-cpu"
                className={styles.externalLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
                <ExternalLink size={14} strokeWidth={1.75} aria-hidden />
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
