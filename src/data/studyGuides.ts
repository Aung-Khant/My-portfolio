export interface StudyGuide {
  id: string;
  title: string;
  course: string;
  description: string;
  tags: string[];
  url: string;
}

export const studyGuides: StudyGuide[] = [
  {
    id: "math7",
    title: "Math 7 Final Exam Survival Guide",
    course: "Math 7 · Calculus I",
    description:
      "All-in-one A-Level edition covering limits, derivatives, integration, and exam strategy from four midterms plus final review analysis.",
    tags: ["Calculus", "Limits", "Integration"],
    url: "/math7_final_survival_guide_v4.html",
  },
  {
    id: "cs42",
    title: "CS 42 Final Exam Study Guide",
    course: "CS 42",
    description:
      "Comprehensive final exam prep for CS 42 — core concepts, patterns, and practice topics organized for last-minute review.",
    tags: ["Computer Science", "Final Exam"],
    url: "/cs42_final_exam_study_guide.html",
  },
];
