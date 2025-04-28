import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import prisma from "$lib/server/prisma";

export const load: PageServerLoad = async ({ params }) => {
    const project = await prisma.project.findUnique({
        where: {
            id: params.id
        }
    });

    if (!project) {
        throw error(404, 'Project not found');
    }

    return {
        project: {
            ...project,
            icon: project.icon ? `data:image/jpeg;base64,${Buffer.from(project.icon).toString('base64')}` : null
        }
    };
}; 