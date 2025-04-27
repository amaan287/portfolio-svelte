import prisma from "$lib/server/prisma";

export async function load({ params }) {
    const article = await prisma.article.findFirst({
        where: {
            articleId: Number(params.articleId)
        }
    });
    return { article };
}