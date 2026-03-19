import type { Metadata } from "next";
import Image from "next/image";
import CaseStudyLayout, {
  styles,
} from "../../../components/CaseStudy/CaseStudyLayout";
import ScreenshotFrame from "../../../components/ScreenshotFrame/ScreenshotFrame";

export const metadata: Metadata = {
  title: "Wayfair — Project Shopping | Courtney Quinn",
};

export default function WayfairPage() {
  return (
    <CaseStudyLayout>
      <header className={styles.header}>
        <p className={styles.label}>Full-Stack · Production</p>
        <h1 className={styles.title}>Wayfair — Project Shopping</h1>
        <p className={styles.meta}>
          Software Engineer I · 2025–Present · React, TypeScript, GraphQL,
          Node.js
        </p>
      </header>

      <div className={styles.heroImage}>
        <ScreenshotFrame>
          <div
            className={styles.heroImageArea}
            style={{ aspectRatio: "3/2", backgroundColor: "var(--color-surface)" }}
          >
            <Image
              src="/images/MyProjects.png"
              alt="Wayfair My Projects feature"
              fill
              style={{ objectFit: "contain", objectPosition: "center" }}
            />
          </div>
        </ScreenshotFrame>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Context</h2>
        <p className={styles.body}>
          Project Shopping is a high-revenue B2C product at Wayfair that enables
          customers to collaboratively plan and purchase furniture. I joined the
          team as a full-stack engineer owning features end-to-end: from
          GraphQL schema design to React UI.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Contribution</h2>
        <p className={styles.body}>
          Designed and shipped production features across the React frontend,
          Node.js layer, and GraphQL APIs. Owned schema design for new
          endpoints, wrote backend resolvers, and built the corresponding UI
          components from Figma specifications. Integrated Datadog logging and
          monitoring to improve production observability. Collaborated with
          platform teams to align on GraphQL contracts, analytics tracking, and
          shared component libraries.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Technical decisions</h2>
        <p className={styles.body}>
          GraphQL schema-first: I designed new schemas before writing any
          resolvers or UI, which surfaced contract mismatches with other teams
          early. Feature flag rollouts via internal tooling let us ship
          incrementally without dark launches.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Outcome</h2>
        <p className={styles.body}>
          Shipped multiple production features on a high-traffic B2C surface.
          Contributed to measurable reduction in cart and project drop-off
          through performance fixes and UX improvements.
        </p>
      </div>

      <nav className={styles.nav}>
        <a href="/#work" className={styles.navLink}>
          ← Back to work
        </a>
        <a href="/work/keystroke" className={styles.navLink}>
          Keystroke →
        </a>
      </nav>
    </CaseStudyLayout>
  );
}
