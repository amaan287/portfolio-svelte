<script lang="ts">
	import type { PageData } from '../routes/projects/$types';
	import Step from './Step.svelte';
	
	let { data } = $props<{data?: PageData}>();
	const projects = $derived(data?.projects?.slice(0, 3) || []);
</script>

<section class="flex flex-col gap-24 py-20 lg:py-32" id="projects">
	<div class="flex flex-col gap-2 text-center">
		<h6 class="text-large sm:text-xl md:text-2xl">A few of my creative endeavors.</h6>
		<h3 class="text-3xl font-semibold sm:text-4xl md:text-5xl">
			Curious to <span class="poppins text-[#81a1c1]">see</span> my work?
		</h3>
	</div>

	<div class="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-10">
		{#each projects as project}
			<Step step={{
				name: project.name,
				icon: 'fa-solid fa-code',
				description: project.description,
				href: `/projects/${project.id}`
			}}>
				<div class="flex flex-col gap-4">
					{#if project.icon}
						<img 
							src={project.icon} 
							alt={project.name} 
							class="w-full h-48 object-cover rounded-lg"
						/>
					{/if}
					<p>
						{project.description}
					</p>
				</div>
			</Step>
		{/each}
	</div>
</section>
