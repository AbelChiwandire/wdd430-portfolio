'use client';
import { useActionState } from 'react';
import { updateProject, type State } from '@/lib/actions';
import { ProjectForm } from '@/components/ProjectForm';

const initialState: State = { message: null, errors: {} };

export default function UpdateProjectForm({ id, initialValues }: { id: string; initialValues: { title?: string; description?: string; technologies?: string; type?: 'opensource' | 'school'; yearCompleted?: number; link?: string } }) {
    const updateProjectWithId = updateProject.bind(null, id);
    const [state, formAction, isPending] = useActionState(updateProjectWithId, initialState);
    return <ProjectForm formAction={formAction} state={state} isPending={isPending} initialValues={initialValues} />;
}