import type { ReactNode } from 'react';
import Link from 'next/link';

interface ProjectCardProps {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    link?: string;
    actions?: ReactNode;
}

export default function ProjectCard({ id, title, description, technologies, link, actions }: ProjectCardProps) {
    return (
        <article className="p-4 border-l-4 border-teal-700 bg-slate-100 rounded">
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-slate-800 mb-3">{description}</p>
            <p className="text-sm text-slate-700">
                <strong>Technologies:</strong> {technologies.join(', ')}
            </p>
            <Link href={`/projects/${id}`} className="text-teal-700 hover:underline">
                View Project Details
            </Link>
            {actions}
        </article>
    )
}