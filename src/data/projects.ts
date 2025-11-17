import type { Project } from "@/components/ProjectCard";

export const projects: Project[] = [
  {
    title: "Task Manager",
    summary: "Full‑stack CRUD app with auth to manage tasks.",
    stack: ["React", "Node", "Express", "MongoDB", "JWT"],
    highlights: ["Auth & protected routes", "Search/filter", "Dockerized"],
    links: { demo: "#", code: "#" },
  },
  {
    title: "URL Shortener API",
    summary: "REST API to shorten and redirect URLs with rate limiting.",
    stack: ["TypeScript", "Express", "Redis", "Prisma"],
    highlights: ["Rate limit", "Custom aliases", "Unit tests"],
    links: { code: "#" },
  },
  {
    title: "Movie Finder",
    summary: "Search movies with OMDb API and save favorites locally.",
    stack: ["Vite", "React", "Tailwind"],
    highlights: ["API integration", "Debounced search", "Responsive UI"],
    links: { demo: "#", code: "#" },
  },
];


