import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectOverview from "@/components/ProjectOverview";
import UserPersonaTarget from "@/components/UserPersonaTarget";
import WebsitePreview from "@/components/WebsitePreview";
import KeyFeatures from "@/components/KeyFeatures";
import TechnologyStack from "@/components/TechnologyStack";
import DesignShowcase from "@/components/DesignShowcase";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <ProjectOverview />
        <UserPersonaTarget />
        <WebsitePreview />
        <KeyFeatures />
        <TechnologyStack />
        <DesignShowcase />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
