import type { Metadata } from "next";
import Image from "next/image";
import CaseStudyLayout, {
  styles,
} from "../../../components/CaseStudy/CaseStudyLayout";
import ScreenshotFrame from "../../../components/ScreenshotFrame/ScreenshotFrame";

export const metadata: Metadata = {
  title: "Keystroke | Courtney Quinn",
};

export default function KeystrokePage() {
  return (
    <CaseStudyLayout>
      <header className={styles.header}>
        <p className={styles.label}>Personal Project · Design + Engineering</p>
        <h1 className={styles.title}>Keystroke</h1>
        <p className={styles.meta}>
          Solo · 2026 · Vanilla JavaScript, Web Audio API, CSS
        </p>
        <a
          href="https://github.com/lemur-cpu/Keystroke"
          className={styles.headerLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live demo ↗
        </a>
      </header>

      <div className={styles.heroImage}>
        <ScreenshotFrame>
          <div className={styles.heroImageArea}>
            <Image
              src="/images/Keystroke.png"
              alt="Keystroke interface"
              fill
              className={styles.heroImageEl}
            />
          </div>
        </ScreenshotFrame>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Context</h2>
        <p className={styles.body}>
          I started writing seriously in 2020 and have used everything from
          Google Docs to Ulysses to actual paper. The problem with most tools is
          that they make it too easy to go back. You edit the sentence you just
          wrote instead of writing the next one. Keystroke is my answer to that
          problem.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Concept</h2>
        <p className={styles.body}>
          The UI is a vintage typewriter. Every constraint of a real typewriter
          is a deliberate feature: backspace is disabled in Flow and Purge modes,
          the paper runs out at 300 words per sheet, keys make sound via Web
          Audio API, and a carriage indicator moves as you type.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Technical decisions</h2>
        <p className={styles.body}>
          I kept the architecture as flat as possible — one JS file per concern,
          no build step, no bundler. The carriage indicator was the trickiest
          part: it reads actual rendered character widths from a hidden ruler
          element after fonts load, so the position tracks real pixels rather
          than estimated ones. Sound is generated through the Web Audio API on
          each keypress rather than playing audio files, which keeps the bundle
          at zero bytes. Session replay works by logging each character with a
          timestamp on input, then playing them back at the same intervals.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>What I&rsquo;d do differently</h2>
        <p className={styles.body}>
          The CSS architecture grew messier than I&rsquo;d like. I&rsquo;d
          introduce a stricter naming convention earlier. The localStorage
          persistence model also needs a migration strategy before I add new data
          shapes.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Outcome</h2>
        <p className={styles.body}>
          A working tool I actually use. Live at github.com/lemur-cpu/Keystroke.
        </p>
      </div>

      <nav className={styles.nav}>
        <a href="/work/wayfair" className={styles.navLink}>
          ← Wayfair
        </a>
        <a href="/work/capstone" className={styles.navLink}>
          Capstone →
        </a>
      </nav>
    </CaseStudyLayout>
  );
}
