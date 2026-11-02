"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  title: string;
  role: string;
  year: string;
  outcome: string;
  href?: string;
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: string;
  objectFit?: "cover" | "contain";
  featured?: boolean;
  index?: number;
  number?: string;
  align?: "left" | "right";
}

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

  const body = (
    <>
      <div
        className={`${styles.thumbnail} ${featured ? styles.featuredThumbnail : ""}`}
      >
        {number && (
          <span className={styles.numberBadge} aria-hidden="true">
            {number}
          </span>
        )}
        <div
          className={`${styles.imageArea} ${featured ? styles.featuredImageArea : ""}`}
        >
          {imageSrc && (
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 55vw"
              className={styles.thumbnailImg}
              style={{
                ...(objectFit ? { objectFit } : {}),
                objectPosition:
                  objectFit === "contain"
                    ? "center"
                    : (imagePosition ?? undefined),
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
        <h3
          className={`${styles.title} ${featured ? styles.featuredTitle : ""}`}
        >
          {title}
        </h3>
        <p className={styles.outcome}>{outcome}</p>
        {href && (
          <span className={styles.cta}>
            <span className={styles.linkText}>Case study</span>
            <ArrowUpRight
              className={styles.arrow}
              aria-hidden
              size={16}
              strokeWidth={1.75}
            />
          </span>
        )}
      </div>
    </>
  );

  return (
    <article
      className={`${styles.card} ${alignClass} ${href ? "" : styles.cardStatic}`}
    >
      {href ? (
        <Link
          href={href}
          className={`${styles.link} ${featured ? styles.featuredLink : ""}`}
        >
          {body}
        </Link>
      ) : (
        <div className={`${styles.link} ${featured ? styles.featuredLink : ""}`}>
          {body}
        </div>
      )}
    </article>
  );
}
