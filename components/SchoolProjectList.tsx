import { getProjects } from '@/lib/projects-db';
import ProjectList from './ProjectList';
import DeleteProjectButton from '@/components/DeleteProjectButton';

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
        <ProjectList
            projects={projects}
            renderActions={(project) => (
                <DeleteProjectButton id={project.id} />
            )}
        />
    );
}