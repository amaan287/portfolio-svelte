<script lang="ts">
	import type { PageData } from '../routes/projects/$types';
	
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

	{#if projects.length > 0}
		<div class="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-10">
			{#each projects as project}
				<div class="group relative overflow-hidden rounded-xl border border-gray-800 bg-black p-6 transition-all duration-300 hover:border-[#81a1c1]">
					<div class="absolute inset-0 bg-gradient-to-br from-[#81a1c1] to-[#5e81ac] opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
					<div class="bg-black grid place-items-center px-4 text-5xl md:text-6xl -mt-10 mx-auto duration-200">
						<i class="fa-solid fa-code"></i>
					</div>
					<div class="relative z-10 flex flex-col gap-4 mt-4">
						<h3 class="text-xl font-semibold text-[#dad7cd] text-center">{project.name}</h3>
						{#if project.icon}
							<img 
								src={project.icon} 
								alt={project.name} 
								class="w-full h-48 object-cover rounded-lg"
							/>
						{/if}
						<p class="text-gray-400">
							{project.description}
						</p>
						<div class="flex-1 flex justify-end items-end mt-4">
							<a 
								href={`/projects/${project.id}`}
								class="cursor-pointer hover:text-slate-950 transition-all ease-in-out duration-400 relative after:absolute after:top-0 after:h-0 after:right-full after:bg-[#dad7cd] after:w-full after:h-full after:duration-400 after:ease-in-out p-2 rounded-full hover:after:translate-x-full after:z-[-1] overflow-hidden"
							>
								<span class="z-10 relative">Go to &rarr;</span>
							</a>
						</div>
					</div>
				</div>
			{/each}
		</div>
	{:else}
		<div class="text-center py-20 bg-black rounded-lg border border-gray-800">
			<p class="text-xl text-gray-400">No projects found.</p>
		</div>
	{/if}
</section>
