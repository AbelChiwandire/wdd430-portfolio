import { getProjectById } from '../../../../lib/projects-db';
import { validateInt } from '../../../../lib/validation';

export async function GET(_request: Request,
    { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const numericId = validateInt(id);
    
    if (numericId === null) {
        return Response.json({ error: 'Invalid project ID' }, { status: 400 });
    }

    const project = await getProjectById(numericId);

    if (!project) {
        return Response.json({ error: 'Project not found' }, { status: 404 });
    }

    return Response.json(project);
}