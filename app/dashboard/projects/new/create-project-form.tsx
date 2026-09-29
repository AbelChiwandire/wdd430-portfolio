'use client';
import { useActionState } from 'react';
import { createProject, type State } from '@/lib/actions';
import { ProjectForm } from '@/components/ProjectForm';

const initialState: State = { message: null, errors: {} };

export default function CreateProjectForm() {
    const [state, formAction, isPending] = useActionState(createProject, initialState);
    return <ProjectForm formAction={formAction} state={state} isPending={isPending} />;
}