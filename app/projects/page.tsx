import Link from 'next/link';
import { getProjects } from '../../lib/projects-db';
import type { Project } from '../../lib/projects-db';
import ProjectList from '../../components/ProjectList';
import DeleteProjectButton from '../../components/DeleteProjectButton';

export const dynamic = 'force-dynamic';

export default async function ProjectsPage() {
    let projects: Project[];
    try {
        projects = await getProjects();
    } catch (error) {
        console.error('getProjects() failed:', error);
        return (
            <main>
                <p className="text-3xl font-bold mb-4">Failed to load projects</p>
            </main>
        );
    }
    if (!projects || projects.length === 0) {
        return (
            <main>
                <p className="text-3xl font-bold mb-4">No projects found</p>
            </main>
        );
    }
    
    return (
        <main>
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-3xl font-bold">Projects Overview</h1>
                <Link
                    href="/projects/create"
                    className="rounded-md bg-teal-700 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-800"
                >
                    New Project
                </Link>
            </div>
            <p className="text-lg text-slate-600">Browse through the list of projects I have worked on.</p>
            <ProjectList
                projects={projects}
                renderActions={(project) => (
                    <div className="mt-2 flex items-center gap-3">
                        <Link
                            href={`/projects/${project.id}/edit`}
                            className="text-sm text-teal-700 hover:underline"
                        >
                            Edit
                        </Link>
                        <DeleteProjectButton id={project.id} />
                    </div>
                )}
            />
        </main>
    );
}