interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    link?: string;
}

export default function ProjectCard({ title, description, technologies, link }: ProjectCardProps) {
    return (
        <article className="p-4 border-l-4 border-teal-700 bg-slate-100 rounded">
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-slate-800 mb-3">{description}</p>
            <p className="text-sm text-slate-700">
                <strong>Technologies:</strong> {technologies.join(', ')}
            </p>
            {link && (
                <p className="mt-2">
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-700 hover:underline"
                    >
                        View Project
                    </a>
                </p>
            )}
        </article>
    )
}