import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    // Create sample projects
    const projects = [
        {
            name: 'AI Form Builder',
            description: 'A powerful tool that generates Google Forms from natural language prompts. Built with Next.js and OpenAI.',
            icon: Buffer.from(''),
            link: 'https://github.com/yourusername/ai-form-builder'
        },
        {
            name: 'AI Calculator',
            description: 'An intelligent calculator that understands natural language queries. Built with SvelteKit and TensorFlow.js.',
            icon: Buffer.from(''),
            link: 'https://github.com/yourusername/ai-calculator'
        },
        {
            name: 'Ghostman',
            description: 'A Postman clone with advanced features for API testing and development. Built with Electron and React.',
            icon: Buffer.from(''),
            link: 'https://github.com/yourusername/ghostman'
        }
    ];

    for (const project of projects) {
        await prisma.project.create({
            data: project
        });
    }

    console.log('Seed data created successfully');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    }); 