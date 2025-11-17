"use client";
import Link from "next/link";
import { useState } from "react";

export type Project = {
  title: string;
  summary: string;
  stack: string[];
  highlights: string[];
  links?: { demo?: string; code?: string };
  image?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="rounded-lg border border-black/5 dark:border-white/10 p-5 hover:shadow-sm transition-shadow">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <button
          onClick={() => setExpanded((v) => !v)}
          className="text-xs rounded-full border px-2 py-0.5"
          aria-controls={`proj-${project.title}`}
          data-expanded={expanded ? "true" : "false"}
        >
          {expanded ? "Hide" : "Details"}
        </button>
      </div>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{project.summary}</p>
      {expanded && (
        <ul id={`proj-${project.title}`} className="mt-3 list-disc pl-5 text-sm">
          {project.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      )}
      <div className="mt-3 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <span key={s} className="rounded-full border px-2 py-0.5 text-xs text-zinc-600 dark:text-zinc-300">
            {s}
          </span>
        ))}
      </div>
      {(project.links?.demo || project.links?.code) && (
        <div className="mt-4 flex gap-3 text-sm">
          {project.links?.demo && (
            <Link href={project.links.demo} className="underline underline-offset-4" target="_blank">
              Live Demo
            </Link>
          )}
          {project.links?.code && (
            <Link href={project.links.code} className="underline underline-offset-4" target="_blank">
              Source Code
            </Link>
          )}
        </div>
      )}
    </div>
  );
}


