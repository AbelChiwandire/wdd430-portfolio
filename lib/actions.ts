'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { validateInt } from './validation';

const currentYear = new Date().getFullYear();

const ProjectFormSchema = z.object({
    title: z.string().min(2),
    description: z.string().min(10),
    technologies: z.string().min(2),
    type: z.enum(['opensource', 'school']),
    yearCompleted: z.coerce
        .number()
        .int('Year must be a whole number.')
        .gte(2000, 'Year must be 2000 or later.')
        .lte(currentYear, `Year cannot be greater than ${currentYear}.`),
    link: z.jwt(),
});

export type State = {
    errors?: {
        title?: string[];
        description?: string[];
        technologies?: string[];
        type?: string[];
        yearCompleted?: string[];
        link?: string[];
    };
    message?: string | null;
}

function getValidatedProjectData(formData: FormData) {
    const parsed = ProjectFormSchema.safeParse({
        title: formData.get('title'),
        description: formData.get('description'),
        technologies: formData.get('technologies'),
        type: formData.get('type'),
        yearCompleted: formData.get('yearCompleted'),
        link: formData.get('link'),
    });

    return parsed;
}

export async function createProject(prevState: State, formData: FormData): Promise<State> {
    const validatedData = getValidatedProjectData(formData);
    if(!validatedData.success) {
        const tree = z.treeifyError(validatedData.error);

        return {
            errors: {
                title: tree.properties?.title?.errors,
                description: tree.properties?.description?.errors,
                technologies: tree.properties?.technologies?.errors,
                type: tree.properties?.type?.errors,
                yearCompleted: tree.properties?.yearCompleted?.errors,
                link: tree.properties?.link?.errors,
            },
            message: 'Missing or invalid fields. Failed to create Project.'
        };
    }

    const { title, description, technologies, type, yearCompleted, link } = validatedData.data;

    try {
        await sql`
            INSERT INTO projects (title, description, technologies, type, year_completed, link)
            VALUES (${title}, ${description}, ${technologies}, ${type}, ${yearCompleted}, ${link})
        `;
    } catch (error) {
        console.error('createProject failed:', error);
        throw error;
    }

    revalidatePath('/projects');
    redirect('/projects');
}

export async function updateProject(id: string, prevState: State, formData: FormData): Promise<State> {
    const numericId = validateInt(id);

    if (numericId === null) {
        throw new Error('Invalid project ID.');
    }

    const validatedData = getValidatedProjectData(formData);
    if(!validatedData.success) {
        const tree = z.treeifyError(validatedData.error);

        return {
            errors: {
                title: tree.properties?.title?.errors,
                description: tree.properties?.description?.errors,
                technologies: tree.properties?.technologies?.errors,
                type: tree.properties?.type?.errors,
                yearCompleted: tree.properties?.yearCompleted?.errors,
                link: tree.properties?.link?.errors,
            },
            message: 'Missing or invalid fields. Failed to update Project.'
        };
    }

    const { title, description, technologies, type, yearCompleted, link } = validatedData.data;
    
    try {
        await sql`
            UPDATE projects
            SET title = ${title},
                description = ${description},
                technologies = ${technologies},
                type = ${type},
                year_completed = ${yearCompleted},
                link = ${link}
            WHERE id = ${numericId}
        `;
    }
    catch (error) {
        console.error('updateProject failed:', error);
        throw error;
    }

    revalidatePath('/projects');
    redirect('/projects');
}

export async function deleteProject(id: string) {
    const numericId = validateInt(id);

    if (numericId === null) {
        throw new Error('Invalid project ID.');
    }

    try {
        await sql`
            DELETE FROM projects
            WHERE id = ${numericId}
        `;
    } catch (error) {
        console.error('deleteProject failed:', error);
        throw error;

    }

    revalidatePath('/projects');
    redirect('/projects');
}