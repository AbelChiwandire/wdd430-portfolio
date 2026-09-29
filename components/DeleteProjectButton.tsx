import { deleteProject } from '@/lib/actions';

interface DeleteProjectButtonProps {
    id: number;
}

export default function DeleteProjectButton({ id }: DeleteProjectButtonProps) {
    return (
        <form action={deleteProject.bind(null, String(id))}>
            <button
                type="submit"
                className="text-sm text-red-700 hover:underline cursor-pointer"
            >
                Delete
            </button>
        </form>
    );
}