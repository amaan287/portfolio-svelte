import type { PrismaClient } from '@prisma/client/extension';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
	let prisma: PrismaClient;
}

export {};
