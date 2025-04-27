import type { Actions } from "./$types";
import prisma from "$lib/server/prisma";

export const actions: Actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const name = formData.get('name')?.toString() || '';
        const description = formData.get('description')?.toString() || '';
        const icon = formData.get('icon') as File;
        const link = formData.get('link')?.toString() || '';
        
        if (!name || !description || !icon || !link) {
            return {
                success: false,
                error: "All fields are required"
            };
        }

        try {
            // Convert image to bytes
            const iconBuffer = await icon.arrayBuffer();
            const iconBytes = Buffer.from(iconBuffer);
            
            const project = await prisma.project.create({
                data: {
                    name,
                    description,
                    icon: iconBytes, // Store image as bytes
                    link
                }
            });

            return {
                success: true,
                project: {
                    ...project,
                    icon: `data:image/${icon.type.split('/')[1]};base64,${iconBytes.toString('base64')}` // Convert to base64 for preview
                }
            };
        } catch (error) {
            return {
                success: false,
                error: (error as Error).message
            };
        }
    }
}

