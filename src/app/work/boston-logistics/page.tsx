import type { Metadata } from "next";
import Image from "next/image";
import CaseStudyLayout, {
  styles,
} from "../../../components/CaseStudy/CaseStudyLayout";
import ScreenshotFrame from "../../../components/ScreenshotFrame/ScreenshotFrame";

export const metadata: Metadata = {
  title: "Boston Logistics Simulator | Courtney Quinn",
};

export default function BostonLogisticsPage() {
  return (
    <CaseStudyLayout>
      <header className={styles.header}>
        <p className={styles.label}>AI Infrastructure · Full-Stack</p>
        <h1 className={styles.title}>Boston Logistics Simulator</h1>
        <p className={styles.meta}>
          Solo · 2026 · React, FastAPI, Python, XGBoost, Mapbox GL JS
        </p>
      </header>

      <div className={styles.heroImage}>
        <ScreenshotFrame>
          <div className={styles.heroImageArea}>
            <Image
              src="/images/BostonLogisticsSimulator.png"
              alt="Boston Logistics Simulator"
              fill
              className={styles.heroImageEl}
              style={{ objectFit: "cover", objectPosition: "top center" }}
            />
          </div>
        </ScreenshotFrame>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Context</h2>
        <p className={styles.body}>
          Boston has significant grocery access gaps across neighborhoods. I
          wanted to understand what happens to those gaps when stores close,
          roads get disrupted, or demand spikes — and whether you could model it
          with enough fidelity to be useful. This simulator models the full
          supply chain as a live road network and lets you run disruption
          scenarios in real time.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>What it does</h2>
        <p className={styles.body}>
          The simulator ingests Boston&rsquo;s OpenStreetMap road network
          (11,400 nodes, 26,000 edges) and computes real-time access times for
          each neighborhood when disruptions are applied. A Mapbox GL JS
          frontend renders live choropleth maps showing how access changes. An
          XGBoost classifier predicts per-store stockout probability with SHAP
          factor attribution surfaced directly in the UI. A facility siting
          algorithm recommends optimal locations for new stores based on current
          access gaps, weighted by population and food insecurity data.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Technical decisions</h2>
        <p className={styles.body}>
          The core routing engine runs NetworkX Dijkstra on the full OSM graph.
          I precomputed baseline isochrones for each neighborhood and applied a
          traffic multiplier on disruption to produce access time deltas. This
          gave sub-minute accuracy without re-running full graph traversal on
          every simulation tick. The XGBoost classifier was trained on synthetic
          labels derived from a deterministic demand-disruption scoring rule
          applied to real store and neighborhood data from USDA FARA and Census
          ACS. AUC-ROC of 0.9982 reflects that it&rsquo;s recovering a known
          rule — in production, labels would come from POS stockout events. The
          architecture stays the same either way. I kept the backend stateless:
          each POST to <code>/simulate</code> runs the full graph pass and
          returns a complete SimulationResponse. No WebSockets, no partial
          updates.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Stack</h2>
        <p className={styles.body}>
          React 18, TypeScript, Vite, Mapbox GL JS, Zustand on the frontend.
          FastAPI, OSMnx, NetworkX, XGBoost, SHAP, scikit-learn on the backend.
          Data from OpenStreetMap, USDA FARA, and Census ACS.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Outcome</h2>
        <p className={styles.body}>
          A working simulator that models real disruption scenarios on real
          Boston geography. The stockout classifier and facility siting
          recommendations surface actionable outputs — not just visualizations.
        </p>
      </div>

      <nav className={styles.nav}>
        <a href="/#work" className={styles.navLink}>
          ← Back to work
        </a>
        <a href="/work/wayfair" className={styles.navLink}>
          Wayfair →
        </a>
      </nav>
    </CaseStudyLayout>
  );
}
