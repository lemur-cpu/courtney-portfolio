"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  title: string;
  role: string;
  year: string;
  outcome: string;
  href: string;
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: string;
  objectFit?: "cover" | "contain";
  featured?: boolean;
  index?: number;
  number?: string;
  align?: "left" | "right";
}

const EASE = [0.77, 0, 0.175, 1] as const;

export default function ProjectCard({
  title,
  role,
  year,
  outcome,
  href,
  imageSrc,
  imageAlt = "",
  imagePosition,
  objectFit,
  featured = false,
  index = 0,
  number,
  align,
}: ProjectCardProps) {
  const alignClass = featured
    ? styles.featuredCard
    : align === "left"
    ? styles.cardLeft
    : align === "right"
    ? styles.cardRight
    : index % 2 === 0
    ? styles.cardLeft
    : styles.cardRight;

  return (
    <motion.article
      className={`${styles.card} ${alignClass}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: EASE }}
    >
      <Link href={href} className={`${styles.link} ${featured ? styles.featuredLink : ""}`}>
        <div className={`${styles.thumbnail} ${featured ? styles.featuredThumbnail : ""}`}>
          <div className={styles.chrome} aria-hidden="true">
            <div className={styles.dot} style={{ backgroundColor: "#EC6A5E" }} />
            <div className={styles.dot} style={{ backgroundColor: "#F4BE4F" }} />
            <div className={styles.dot} style={{ backgroundColor: "#61C554" }} />
          </div>
          <div className={`${styles.imageArea} ${featured ? styles.featuredImageArea : ""}`}>
            {imageSrc && (
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 55vw"
                className={styles.thumbnailImg}
                style={{
                  ...(objectFit ? { objectFit } : {}),
                  objectPosition: objectFit === "contain" ? "center" : (imagePosition ?? undefined),
                }}
              />
            )}
          </div>
        </div>

        <div className={`${styles.body} ${featured ? styles.featuredBody : ""}`}>
          {featured && <span className={styles.tag}>Personal Project</span>}
          <p className={styles.meta}>
            {role} · {year}
          </p>
          {number && <p className={styles.number}>{number}</p>}
          <h3 className={`${styles.title} ${featured ? styles.featuredTitle : ""}`}>
            {title}
          </h3>
          <p className={styles.outcome}>{outcome}</p>
          <span className={styles.cta}>
            <span className={styles.linkText}>Case study</span>{" "}
            <span className={styles.arrow}>→</span>
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
