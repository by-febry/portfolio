import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <Nav />
      <main className="mx-auto max-w-5xl px-5">
        <Section id="home" title="Hi, I'm Char" description="IT student focusing on web development and systems.">
          <div className="flex flex-col gap-4">
            <p className="text-zinc-700 dark:text-zinc-300">
              I enjoy building practical apps and learning end‑to‑end development, from UI to APIs and deployment.
            </p>
            <div className="flex gap-3">
              <a href="#projects" className="rounded-full bg-foreground px-4 py-2 text-background text-sm">
                View Projects
              </a>
              <a href="/resume.pdf" className="rounded-full border px-4 py-2 text-sm" target="_blank">
                Download Resume
              </a>
            </div>
          </div>
        </Section>

        <Section id="about" title="About">
          <p className="max-w-3xl text-zinc-700 dark:text-zinc-300">
            I'm an IT student who likes shipping small, useful projects. Recently I've been working with Next.js, TypeScript,
            and Tailwind. I'm also exploring backend APIs, databases, and basic DevOps.
          </p>
        </Section>

        <Section id="skills" title="Skills">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
            {Object.entries(skills).map(([group, list]) => (
              <div key={group} className="rounded-lg border border-black/5 dark:border-white/10 p-4">
                <h3 className="text-sm font-semibold capitalize">{group}</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {list.map((it) => (
                    <span key={it} className="rounded-full border px-2 py-0.5 text-xs text-zinc-600 dark:text-zinc-300">
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects" description="A few things I've built or am building.">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {projects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <div className="space-y-2 text-zinc-700 dark:text-zinc-300">
            <p>Feel free to reach out:</p>
            <ul className="space-y-1 text-sm">
              <li>
                Email: <a className="underline" href="mailto:you@example.com">you@example.com</a>
              </li>
              <li>
                GitHub: <a className="underline" href="https://github.com/by-char" target="_blank" rel="noreferrer noopener">github.com/by-char</a>
              </li>
              <li>
                LinkedIn: <a className="underline" href="#" target="_blank">your-linkedin</a>
              </li>
            </ul>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
