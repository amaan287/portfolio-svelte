import type { Actions } from "./$types";
import prisma from "$lib/server/prisma";



export const actions: Actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const title = formData.get('title')?.toString() || '';
        const content = formData.get('content')?.toString() || '';
        
        if (!title || !content) {
            return {
                success: false,
                error: "Title and content are required"
            };
        }
        
        try {
            const article = await prisma.article.create({
                data: {
                    title,
                    content
                }
            });

            return {
                success: true,
                article
            };
        } catch (error) {
            return {
                success: false,
                error: (error as Error).message
            };
        }
    }
}