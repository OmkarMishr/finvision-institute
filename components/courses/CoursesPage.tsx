"use client";

import { useState } from "react";
import { useNav } from "@/components/context/NavContext";
import CoursesBanner from "./CoursesBanner";
import CoursesSection from "./CoursesSection";
import CourseEnrollModal from "./CourseEnrollModal";
import { COURSE_PLANS } from "@/lib/data";
import { CoursePlan } from "@/lib/types";

export default function CoursesPage() {
  const { page } = useNav();
  const [selectedPlan, setSelectedPlan] = useState<CoursePlan | null>(null);

  const demoPlan = COURSE_PLANS.find((p) => p.id === "demo")!;

  return (
    <div className={`page${page === "courses" ? " active" : ""}`} id="page-courses">
      <CoursesBanner onBookDemo={() => setSelectedPlan(demoPlan)} />
      <CoursesSection onEnroll={setSelectedPlan} />
      {selectedPlan && (
        <CourseEnrollModal
          plan={selectedPlan}
          onClose={() => setSelectedPlan(null)}
        />
      )}
    </div>
  );
}
