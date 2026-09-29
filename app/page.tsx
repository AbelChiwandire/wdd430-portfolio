import ProjectList from '@/components/ProjectList';
import { getFeaturedProjects } from '@/lib/projects-db';

export default async function Home() {
  const projects = await getFeaturedProjects();

  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-slate-600">
          I am a full-stack developer learning Next.js and React. Here are some of my recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}