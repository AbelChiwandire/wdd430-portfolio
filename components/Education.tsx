interface EducationProps {
    degreeTitle: string;
    courses: string[];
}

export default function Education({ degreeTitle, courses }: EducationProps) {
    return (
        <div>
            <h3 className="text-xl font-bold mb-2">{degreeTitle}</h3>
            <p className="text-slate-700 mb-3">
                <strong>Courses:</strong> {courses.join(', ')}
            </p>
        </div>
    );
}