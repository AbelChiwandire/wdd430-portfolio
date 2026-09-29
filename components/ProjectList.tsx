import ProjectCard from './ProjectCard';
import type { Project } from '../lib/projects-db';

interface ProjectListProps {
    projects: Project[];
    renderActions?: (project: Project) => React.ReactNode;
}

export default function ProjectList({ projects, renderActions }: ProjectListProps) {
    return (
        <section className="grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
                <ProjectCard
                    key={project.id}
                    {...project}
                    actions={renderActions?.(project)}
                />
            ))}
        </section>
    );
}