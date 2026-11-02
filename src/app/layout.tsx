import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Instrument_Serif, DM_Sans, Courier_Prime } from "next/font/google";
import Nav from "../components/Nav/Nav";
import PageTransition from "../components/PageTransition/PageTransition";
import ThemeProvider from "../components/ThemeToggle/ThemeProvider";
import ContactProvider from "../components/ContactModal/ContactProvider";
import "../styles/globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
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
  description: "AI software engineer with a design background.",
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
      className={`${instrumentSerif.variable} ${dmSans.variable} ${courierPrime.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>
          <ContactProvider>
            <Nav />
            <PageTransition>{children}</PageTransition>
          </ContactProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
