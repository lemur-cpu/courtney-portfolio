import Hero from "../components/Hero/Hero";
import WorkSection from "../components/Work/WorkSection";
import ProjectCard from "../components/Work/ProjectCard";
import SkillsStrip from "../components/SkillsStrip/SkillsStrip";
import AboutSnippet from "../components/About/AboutSnippet";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <WorkSection>
        <ProjectCard
          title="Wayfair — Project Shopping"
          role="Software Engineer I"
          year="2025–Present"
          outcome="Full-stack feature development on a high-revenue B2C product."
          href="/work/wayfair"
          imageSrc="/images/MyProjects.png"
          imageAlt="Wayfair My Projects feature"
        />
        <ProjectCard
          title="Keystroke"
          role="Solo / Personal"
          year="2025–2026"
          outcome="A browser-based writing tool built with no dependencies."
          href="/work/keystroke"
          imageSrc="/images/Keystroke.png"
          imageAlt="Keystroke writing tool"
          featured={true}
          objectFit="contain"
        />
        <ProjectCard
          title="AV Fuel & Energy Estimation"
          role="Team Lead"
          year="2025"
          outcome="Energy consumption modeling across four vehicle types."
          href="/work/capstone"
          imageSrc="/images/Capstone.png"
          imageAlt="AV Fuel and Energy Estimation app"
          objectFit="contain"
        />
      </WorkSection>
      <SkillsStrip />
      <AboutSnippet />
      <Footer />
    </>
  );
}
