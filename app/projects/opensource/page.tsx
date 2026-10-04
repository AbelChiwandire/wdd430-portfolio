import { getProjects } from '../../../lib/projects-db';
import type { Project } from '../../../lib/projects-db';
import ProjectList from '../../../components/ProjectList';
import DeleteProjectButton from '@/components/DeleteProjectButton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Open Source',
};

export const dynamic = 'force-dynamic';

export default async function OpenSourcePage() {
    let projects: Project[];
    try {
        projects = await getProjects('opensource');
    } catch (error) {
        console.error('getProjects(opensource) failed:', error);
        return (
            <main>
                <p className="text-3xl font-bold mb-4">Failed to load open source projects</p>
            </main>
        );
    }
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
            <ProjectList
                projects={projects}
                renderActions={(project) => (
                    <DeleteProjectButton id={project.id} />
                )}
            />
        </main>
    );
}