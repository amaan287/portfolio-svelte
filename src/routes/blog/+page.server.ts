import prisma from "$lib/server/prisma";

export async function load() {
    const articles = await prisma.article.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    });
    return { articles };
}