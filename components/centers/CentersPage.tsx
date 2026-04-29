import { useNav } from "@/components/context/NavContext";
import CentersBanner from "./CentersBanner";
import CentersSection from "./CentersSection";
import CentersFinalCTA from "./CentersFinalCTA";

export default function CentersPage() {
  const { page } = useNav();
  return (
    <div className={`page${page === "centers" ? " active" : ""}`} id="page-centers">
      <CentersBanner />
      <CentersSection />
      <CentersFinalCTA />
    </div>
  );
}
