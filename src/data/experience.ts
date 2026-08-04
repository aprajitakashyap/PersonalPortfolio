import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "1",
    role: "Software Engineering Intern",
    company: "TechCorp Solutions",
    location: "Bangalore, India (Hybrid)",
    startDate: "May 2025",
    endDate: "July 2025",
    description:
      "Worked within the Platform Engineering team on developer tooling and internal infrastructure. Contributed to the company's core API gateway and improved observability across microservices.",
    achievements: [
      "Reduced API gateway p95 latency by 22% by introducing response caching at the edge layer using Redis.",
      "Built a reusable internal UI component library (12 components) used across 3 product teams, reducing frontend development time by ~30%.",
      "Implemented distributed tracing with OpenTelemetry across 5 microservices, significantly reducing mean time to resolution for production incidents.",
      "Automated a weekly reporting pipeline using Python, eliminating 4 hours of manual work per sprint.",
    ],
  },
  {
    id: "2",
    role: "Open Source Contributor",
    company: "GirlScript Summer of Code",
    location: "Remote",
    startDate: "June 2024",
    endDate: "August 2024",
    description:
      "Selected as a contributor for GirlScript Summer of Code 2024. Contributed to multiple open-source projects in the React and Node.js ecosystem, collaborating with maintainers and mentors across a global community.",
    achievements: [
      "Merged 8 pull requests across 3 open-source repositories, improving documentation, fixing bugs, and adding new features.",
      "Implemented accessibility improvements (ARIA labels, keyboard navigation) for a popular React component library.",
      "Reviewed and provided feedback on 12 other contributors' PRs, helping maintain code quality standards.",
      "Ranked in the top 15% of contributors by overall project score.",
    ],
  },
  {
    id: "3",
    role: "Undergraduate Teaching Assistant",
    company: "Computer Science Department — University",
    location: "On Campus",
    startDate: "January 2024",
    endDate: "May 2024",
    description:
      "Assisted the professor for the Data Structures & Algorithms course, supporting a cohort of 120 students. Held weekly office hours, graded assignments, and created supplementary learning materials.",
    achievements: [
      "Created a visual DSA animation tool using React that students used to understand tree traversal algorithms — adopted by the department for future semesters.",
      "Held 4 hours of office hours per week, helping students debug code and understand algorithmic complexity.",
      "Improved average assignment submission quality, reflected in a 15% increase in class average compared to the previous semester.",
    ],
  },
];
