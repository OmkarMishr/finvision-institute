import { useNav } from "@/components/context/NavContext";
import AboutBanner from "./AboutBanner";
//import AboutStorySection from "./AboutStorySection";
import FounderSection from "./FounderSection";
import TeamSection from "./TeamSection";
import PhilosophySection from "./PhilosophySection";
import CitiesSection from "./CitiesSection";

export default function AboutPage() {
  const { page } = useNav();
  return (
    <div className={`page${page === "about" ? " active" : ""}`} id="page-about">
      <AboutBanner />
      <FounderSection />
      <TeamSection />
      <PhilosophySection />
      <CitiesSection />
    </div>
  );
}
