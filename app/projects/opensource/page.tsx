import { getBaseUrl } from '../../../lib/base-url';

export default async function OpenSourcePage() {
    const res = await fetch(`${getBaseUrl()}/api/projects?type=opensource`);
    if (!res.ok) {
        return (
            <main>
                <p className="text-3xl font-bold mb-4">Failed to load open source projects</p>
            </main>
        );
    }
    const projects = await res.json();
    if (!projects || projects.length === 0) {
        return (
            <main>
                <p className="text-3xl font-bold mb-4">No open source projects found</p>
            </main>
        );
    }

    return (
        <main>
            <h1 className="text-3xl font-bold mb-4">Open Source Projects</h1>
            <p className="text-lg text-slate-600">Here you can find a list of my open source contributions and projects.</p>
            <ul className="mt-4">
                {projects.map((project: any) => (
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