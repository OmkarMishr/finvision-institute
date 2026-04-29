import { useNav } from "@/components/context/NavContext";
import CoursesBanner from "./CoursesBanner";
import CoursesSection from "./CoursesSection";

export default function CoursesPage() {
  const { page } = useNav();
  return (
    <div className={`page${page === "courses" ? " active" : ""}`} id="page-courses">
      <CoursesBanner />
      <CoursesSection />
    </div>
  );
}
