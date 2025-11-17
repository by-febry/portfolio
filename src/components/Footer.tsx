export default function Footer() {
  return (
    <footer className="mt-16 border-t border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-5xl px-5 py-6 text-sm text-zinc-500">
        © {new Date().getFullYear()} Char — Built with Next.js & Tailwind
      </div>
    </footer>
  );
}


