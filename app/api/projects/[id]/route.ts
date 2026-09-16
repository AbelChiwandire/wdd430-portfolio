import { getProjectById } from '../../../../lib/projects-db';

export async function GET(_request: Request,
    { params }: { params: { id: string } }) {
    const id = Number(params.id);
    
    if (isNaN(id)) {
        return Response.json({ error: 'Invalid project ID' }, { status: 400 });
    }

    const project = getProjectById(id);

    if (!project) {
        return Response.json({ error: 'Project not found' }, { status: 404 });
    }

    return Response.json(project);
}