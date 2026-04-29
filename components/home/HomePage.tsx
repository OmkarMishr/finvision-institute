import { useNav } from "@/components/context/NavContext";
import HeroSection from "./HeroSection";
import TickerStrip from "./TickerStrip";
import StatsStrip from "./StatsStrip";
import ProblemSection from "./ProblemSection";
import SolutionSection from "./SolutionSection";
import CoursesSnapshot from "./CoursesSnapshot";
import TestimonialsSection from "./TestimonialsSection";
import JourneySection from "./JourneySection";
import InstituteSection from "./InstituteSection";
import FaqSection from "./FaqSection";
import FinalCTASection from "./FinalCTASection";

export default function HomePage() {
  const { page } = useNav();
  return (
    <div className={`page${page === "home" ? " active" : ""}`} id="page-home">
      <HeroSection />
      <TickerStrip />
      <StatsStrip />
      <ProblemSection />
      <SolutionSection />
      <CoursesSnapshot />
      <TestimonialsSection />
      <JourneySection />
      <InstituteSection />
      <FaqSection />
      <FinalCTASection />
    </div>
  );
}
