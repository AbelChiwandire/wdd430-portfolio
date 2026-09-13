import Link from 'next/link';

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <nav className="flex gap-4 mb-6 border-b pb-4">
        <Link href="/projects" className="text-slate-600 hover:text-slate-900 hover:underline">Overview</Link>
        <Link href="/projects/opensource" className="text-slate-600 hover:text-slate-900 hover:underline">Open Source</Link>
        <Link href="/projects/school" className="text-slate-600 hover:text-slate-900 hover:underline">School</Link>
      </nav>
      {children}
    </section>
  );
}