<script lang="ts">
	import StarAnimation from '../../components/starAnimation.svelte';
	import type { PageData } from './$types';

	let { data } = $props<{ data: PageData }>();
	const projects = $derived(data.projects);
</script>

<StarAnimation />

<main class="content-container flex flex-1 flex-col p-4">
	<section class="mx-auto w-full max-w-6xl py-8 sm:py-14">
		<div class="mb-10 text-center">
			<h2 class="text-4xl font-semibold text-[#dad7cd] sm:text-5xl md:text-6xl">
				My <span class="poppins">Projects</span>
			</h2>
			<p class="mt-4 text-base sm:text-lg md:text-xl">Things I've built and worked on</p>
		</div>

		<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each projects as project}
				<div
					class="rounded-xl border border-gray-800 bg-black p-6 shadow-lg shadow-gray-900 transition-shadow duration-300 hover:shadow-xl"
				>
					{#if project.icon}
						<img
							src={project.icon}
							alt={project.name}
							class="mb-4 h-48 w-full rounded-lg object-cover"
						/>
					{/if}
					<h3 class="mb-2 text-xl font-semibold text-[#dad7cd]">{project.name}</h3>
					<p class="mb-4 text-gray-400">{project.description}</p>
					<a
						href={project.link}
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center text-[#81a1c1] transition-colors duration-300 hover:text-[#5e81ac]"
					>
						View Project
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
			{/each}
		</div>
	</section>
</main>
