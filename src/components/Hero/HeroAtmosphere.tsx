import styles from "./Hero.module.css";

/** Haikei-inspired cool-ink waves — brand teal, not purple blobs. */
export default function HeroAtmosphere() {
  return (
    <div className={styles.atmosphere} aria-hidden="true">
      <svg
        className={styles.atmosphereSvg}
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="inkWash" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.18" />
            <stop offset="55%" stopColor="var(--color-accent)" stopOpacity="0.06" />
            <stop offset="100%" stopColor="var(--color-surface)" stopOpacity="0.35" />
          </linearGradient>
          <linearGradient id="inkDeep" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.22" />
            <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          fill="url(#inkWash)"
          d="M0 480C180 420 280 560 460 520C640 480 720 320 900 360C1050 390 1140 480 1200 520V800H0V480Z"
        />
        <path
          fill="url(#inkDeep)"
          d="M0 560C220 500 340 640 520 600C700 560 780 420 960 460C1080 488 1160 560 1200 600V800H0V560Z"
        />
        <circle cx="980" cy="160" r="140" fill="var(--color-accent)" fillOpacity="0.08" />
        <circle cx="1040" cy="120" r="70" fill="var(--color-accent)" fillOpacity="0.12" />
        <path
          fill="none"
          stroke="var(--color-accent)"
          strokeOpacity="0.35"
          strokeWidth="1.25"
          d="M720 80C820 140 860 240 820 340"
        />
      </svg>
      <div className={styles.atmosphereGrid} />
    </div>
  );
}
