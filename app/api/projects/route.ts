import type { Project } from '../../../lib/projects-db';
import { getProjects } from '../../../lib/projects-db';

export async function GET(request: Request): Promise<Response> {
    const type = new URL(request.url).searchParams.get('type');

    const acceptedTypes = ['opensource', 'school'];

    if (type && !acceptedTypes.includes(type)) {
        return Response.json({ error: 'Invalid type' }, { status: 400 });
    }

    const projects: Project[] = getProjects(type);
    
    return Response.json(projects)
}
