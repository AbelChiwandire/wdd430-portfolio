import { getProjects } from '@/lib/projects-db';

async function getSchoolProjects() {
    try {
        return await getProjects('school');
    } catch (error) {
        console.error('getProjects(school) failed:', error);
        return null;
    }
}

export default async function SchoolProjectList() {
    const projects = await getSchoolProjects();

    if (projects === null) {
        return <p className="text-3xl font-bold mb-4">Failed to load school projects</p>;
    }

    if (projects.length === 0) {
        return <p className="text-3xl font-bold mb-4">No school projects found</p>;
    }

    return (
        <ul className="mt-4">
            {projects.map((project) => (
                <li key={project.id} className="mb-2">
                    <h2 className="font-semibold">{project.title}</h2>
                    <p className="text-slate-600">{project.description}</p>
                    <p className="text-slate-600">
                        Technologies: {project.technologies.join(', ')}
                    </p>
                </li>
            ))}
        </ul>
    );
}