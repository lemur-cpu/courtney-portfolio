import type { Metadata } from "next";
import AboutPageContent from "../../components/About/AboutPageContent";

export const metadata: Metadata = {
  title: "About | Courtney Quinn",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
