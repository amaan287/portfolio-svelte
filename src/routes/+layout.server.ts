import prisma from "$lib/server/prisma";

export async function load() {
    try {
        const projects = await prisma.project.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });

        // Convert icon bytes to base64 for display
        const projectsWithImages = projects.map(project => ({
            ...project,
            icon: project.icon ? `data:image/jpeg;base64,${Buffer.from(project.icon).toString('base64')}` : null
        }));

        return { projects: projectsWithImages };
    } catch (error) {
        console.error('Error loading projects:', error);
        return { projects: [] };
    }
} 