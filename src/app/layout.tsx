import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Courier_Prime } from "next/font/google";
import Nav from "../components/Nav/Nav";
import PageTransition from "../components/PageTransition/PageTransition";
import ThemeProvider from "../components/ThemeToggle/ThemeProvider";
import "../styles/globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const courierPrime = Courier_Prime({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Courtney Quinn",
  description: "Full-stack engineer with a design background.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${dmSans.variable} ${courierPrime.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>
          <Nav />
          <PageTransition>{children}</PageTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}
