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
          <div
            className={styles.heroImageArea}
            style={{ aspectRatio: "16/7", background: "var(--color-surface)" }}
          >
            <Image
              src="/images/BostonLogisticsSimulator.png"
              alt="Boston Logistics Simulator"
              fill
              className={styles.heroImageEl}
              style={{ objectFit: "contain", objectPosition: "center top" }}
            />
          </div>
        </ScreenshotFrame>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Context</h2>
        <p className={styles.body}>
          Boston has real grocery access gaps across neighborhoods. I wanted to
          model what happens to those gaps when stores close, roads get
          disrupted, or demand spikes — with enough precision to produce
          meaningful outputs. This simulator runs disruption scenarios on a live
          road network in real time.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>What it does</h2>
        <p className={styles.body}>
          Ingests Boston&rsquo;s OpenStreetMap road network (11,400 nodes,
          26,000 edges) and computes neighborhood access times as disruptions
          are applied. A Mapbox GL JS frontend renders live maps showing how
          access degrades by neighborhood. An XGBoost classifier predicts
          per-store restock risk with SHAP factor attribution surfaced in the
          UI. A facility siting algorithm recommends new store locations weighted
          by population and food insecurity index.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Technical decisions</h2>
        <p className={styles.body}>
          Routing runs NetworkX Dijkstra on the full OSM graph with precomputed
          baseline isochrones per neighborhood. Disruptions recompute only
          affected subgraphs, keeping simulation response under 1.5 seconds
          without full graph re-traversal.
        </p>
        <p className={styles.body} style={{ marginTop: "1em" }}>
          The XGBoost classifier was trained on synthetic labels generated from
          a deterministic scoring rule applied to USDA FARA and Census ACS data.
          AUC-ROC of 0.9982 reflects label recovery, not generalization — in
          production, labels would come from POS events. The pipeline is
          identical either way.
        </p>
        <p className={styles.body} style={{ marginTop: "1em" }}>
          The backend is stateless: each POST to{" "}
          <code>/simulate</code> runs a full graph pass and returns a complete
          SimulationResponse. No WebSockets, no partial updates, no session
          state.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Stack</h2>
        <p className={styles.body}>
          React 18, TypeScript, Mapbox GL JS, Zustand on the frontend. FastAPI,
          OSMnx, NetworkX, XGBoost, SHAP on the backend. Data from
          OpenStreetMap, USDA FARA, and Census ACS.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Outcome</h2>
        <p className={styles.body}>
          A working simulator on real Boston geography with actionable outputs:
          access time by neighborhood, ranked store risk, and data-weighted
          location recommendations.
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
