import type { Metadata } from "next";
import Image from "next/image";
import CaseStudyLayout, {
  styles,
} from "../../../components/CaseStudy/CaseStudyLayout";
import ScreenshotFrame from "../../../components/ScreenshotFrame/ScreenshotFrame";

export const metadata: Metadata = {
  title: "AV Fuel & Energy Estimation | Courtney Quinn",
};

export default function CapstonePage() {
  return (
    <CaseStudyLayout>
      <header className={styles.header}>
        <p className={styles.label}>Academic · Full-Stack</p>
        <h1 className={styles.title}>AV Fuel &amp; Energy Estimation</h1>
        <p className={styles.meta}>
          Team Lead · 2025 · Python, React, REST APIs
        </p>
      </header>

      <div className={styles.heroImage}>
        <ScreenshotFrame>
          <div className={styles.heroImageArea}>
            <Image
              src="/images/Capstone.png"
              alt="AV Fuel and Energy Estimation"
              fill
              className={styles.heroImageEl}
              style={{ objectPosition: "top center" }}
            />
          </div>
        </ScreenshotFrame>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Context</h2>
        <p className={styles.body}>
          Senior capstone project at Virginia Tech. Built a full-stack web
          application for estimating and comparing fuel and energy consumption
          across four vehicle types: internal combustion, battery electric,
          hybrid, and hydrogen fuel cell.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Contribution</h2>
        <p className={styles.body}>
          Implemented Python data processing pipelines to analyze real driving
          speed datasets. Designed a REST API layer and a web interface for
          visualization and comparative analysis. Focused on data accuracy, clean
          API design, and performance optimization across vehicle models.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Technical decisions</h2>
        <p className={styles.body}>
          Separated the data pipeline from the web layer so the processing logic
          could be tested independently. Used real driving cycle datasets rather
          than synthetic benchmarks, which required cleaning inconsistent data
          formats from multiple sources.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Outcome</h2>
        <p className={styles.body}>
          Delivered a working tool used by the project&rsquo;s academic
          reviewers. Strong data accuracy across vehicle types.
        </p>
      </div>

      <nav className={styles.nav}>
        <a href="/work/keystroke" className={styles.navLink}>
          ← Keystroke
        </a>
        <a href="/#work" className={styles.navLink}>
          ← Back to work
        </a>
      </nav>
    </CaseStudyLayout>
  );
}
