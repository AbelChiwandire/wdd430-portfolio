import ProjectList from '@/components/ProjectList';
const projects = [
  {
    title: 'StockFolio',
    description: 'A web application to track and manage stock portfolios.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://stockfolio-1nns.onrender.com'
  },
  {
    title: 'Property Management API',
    description: 'An API for managing property listings and related data.',
    technologies: ['Node.js', 'Express', 'MongoDB'],
    link: 'https://property-management-api-1ai4.onrender.com'
  }
];

export default function Home() { 
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-slate-600">
          I'm a full-stack developer learning Next.js and React. Here are some of my recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}