<script lang="ts">
	import type { PageData } from './$types';
	import StarAnimation from '../../../components/starAnimation.svelte';

	let { data } = $props<{ data: PageData }>();
	const project = $derived(data.project);
</script>

<StarAnimation />

<main class="content-container flex flex-1 flex-col p-4">
	<section class="mx-auto w-full max-w-4xl py-8 sm:py-14">
		<article class="rounded-xl border border-gray-800 bg-black p-8 shadow-lg shadow-gray-900">
			<header class="mb-8">
				<h1 class="mb-4 text-3xl font-semibold text-[#dad7cd] sm:text-4xl md:text-5xl">
					{project.name}
				</h1>
				<div class="flex items-center justify-between text-sm text-gray-400">
					<time>{new Date(project.createdAt).toLocaleDateString()}</time>
				</div>
			</header>

			{#if project.icon}
				<img
					src={project.icon}
					alt={project.name}
					class="mb-8 h-64 w-full rounded-lg object-cover"
				/>
			{/if}

			<div class="prose prose-invert max-w-none">
				<p class="leading-relaxed whitespace-pre-line text-gray-300">
					{project.description}
				</p>
				<p class="leading-relaxed whitespace-pre-line text-gray-300">
					{project.blog}
				</p>
			</div>

			<div class="mt-10 border-t border-gray-800 pt-6">
				<a
					href={project.link}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center text-[#81a1c1] transition-colors duration-300 hover:text-[#5e81ac]"
				>
					View Live Project
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="ml-1 h-4 w-4"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
							clip-rule="evenodd"
						/>
					</svg>
				</a>
			</div>
		</article>
	</section>
</main>
