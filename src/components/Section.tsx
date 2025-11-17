import { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<{
  id: string;
  title: string;
  description?: string;
}>;

export default function Section({ id, title, description, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-20">
      <div className="mx-auto max-w-5xl px-5 py-10">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
          {description ? (
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">{description}</p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}


