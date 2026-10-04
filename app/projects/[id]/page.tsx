import { cache } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProjectById } from '@/lib/projects-db';
import { validateInt } from '@/lib/validation';

type Props = {
    params: Promise<{ id: string }>;
}

const getProject = cache(async (id: string) => {
    const projectId = validateInt(id);
    if (projectId === null) return null;
    return getProjectById(projectId);
})

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const project = await getProject(id);

    if (!project) {
        return {
            title: 'Project Not Found',
            description: 'The requested project could not be found.',
        };
    }

    return {
        title: project.title,
        description: project.description,
        openGraph: {
            title: project.title,
            description: project.description,
        }
    };
}

export default async function ProjectPage({ params }: Props) {
    const { id } = await params;
    const project = await getProject(id);

    if (!project) {
        notFound();
    }

    return (
        <main className="mx-auto max-w-3xl px-4 py-10">
            <Link
                href="/projects"
                className="text-sm font-medium text-teal-700 hover:underline"
            >
                ← Back to projects
            </Link>

            <article className="mt-6 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
                    {project.type === 'opensource' ? 'Open Source' : 'School'}
                </p>

                <h1 className="mt-2 text-3xl font-bold text-slate-900">
                    {project.title}
                </h1>

                <p className="mt-2 text-sm text-slate-500">
                    Completed in {project.yearCompleted}
                </p>

                <p className="mt-6 whitespace-pre-line leading-7 text-slate-700">
                    {project.description}
                </p>

                {project.technologies.length > 0 && (
                    <section className="mt-6">
                        <h2 className="text-sm font-semibold text-slate-900">
                            Technologies
                        </h2>
                        <ul className="mt-2 flex flex-wrap gap-2">
                            {project.technologies.map((technology) => (
                                <li
                                    key={technology}
                                    className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700"
                                >
                                    {technology}
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                {project.link && (
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-block rounded-md bg-teal-700 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-800"
                    >
                        View project
                    </a>
                )}
            </article>
        </main>
    );
}