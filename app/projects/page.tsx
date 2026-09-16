import type { Project } from '../../lib/projects-db';
import { getBaseUrl } from '../../lib/base-url';

export default async function ProjectsPage() {
    const res = await fetch(`${getBaseUrl()}/api/projects`);
    if (!res.ok) {
        return (
            <main>
                <p className="text-3xl font-bold mb-4">Failed to load projects</p>
            </main>
        );
    }
    const projects: Project[] = await res.json();
    if (!projects || projects.length === 0) {
        return (
            <main>
                <p className="text-3xl font-bold mb-4">No projects found</p>
            </main>
        );
    }
    
    return (
        <main>
            <h1 className="text-3xl font-bold mb-4">Projects Overview</h1>
            <p className="text-lg text-slate-600">Browse through the list of projects I have worked on.</p>
            <ul className="mt-4">
                {projects.map((project) => (
                    <li key={project.id} className="mb-2">
                        <h2 className="font-semibold">{project.title}</h2>
                        <p className="text-slate-600">{project.description}</p>
                        <p className="text-slate-600">Technologies: {project.technologies}</p>
                    </li>
                ))}
            </ul>
        </main>
    );
}