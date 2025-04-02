import { PrismaClient } from '@prisma/client';

// Use type assertion for global access to avoid TypeScript errors
const globalForPrisma = global as unknown as { prisma: PrismaClient | undefined };

// Check if we already have a PrismaClient instance cached
const prisma = globalForPrisma.prisma || new PrismaClient();

// In development, save the instance for reuse to prevent too many connections
if (process.env.NODE_ENV === 'development') {
	globalForPrisma.prisma = prisma;
}

export default prisma;
