import { notFound } from 'next/navigation';
import { getProjectById } from '@/lib/projects-db';
import { validateInt } from '@/lib/validation';
import UpdateProjectForm from './update-project-form';

export default async function Page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const numericId = validateInt(params.id);

    if (numericId === null) {
        notFound();
    }

    const project = await getProjectById(numericId);

    if (!project) {
        notFound();
    }

    return (
        <UpdateProjectForm
            id={params.id}
            initialValues={{
                title: project.title,
                description: project.description,
                technologies: project.technologies.join(', '),
                type: project.type,
                yearCompleted: project.yearCompleted,
                link: project.link,
            }}
        />
    );
}