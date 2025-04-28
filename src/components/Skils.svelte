<script>
	const skills = {
		Golang: 5,
		JavaScript: 5,
		TypeScript: 5,
		React: 5,
		Next: 5,
		Svelte: 5,
		TailwindCSS: 5,
		Express: 5,
		PostgreSQL: 5,
		MongoDB: 5,
		Firebase: 5,
		Git: 5,
		Docker: 5,
		Linux: 5,
		C: 5,
		AWS: 5,
		Node: 5,
		Postman: 5,
		VSCode: 5,
		nvim: 5,
		Github: 5
	};
</script>

<section id="skills" class="mx-auto max-w-8xl px-6 py-16 sm:px-12 lg:px-24">
	<div class="text-center mb-12">
		<h1 class="text-4xl font-bold text-[#dad7cd] mb-4">Skills</h1>
		<p class="text-gray-400">Technologies I work with</p>
	</div>

	<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
		{#each Object.entries(skills) as [category]}
			<div class="group relative overflow-hidden rounded-xl border border-gray-800 bg-black p-6 transition-all duration-300 hover:border-[#81a1c1]">
				<div class="absolute inset-0 bg-gradient-to-br from-[#81a1c1] to-[#5e81ac] opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
				<div class="relative z-10">
					<h3 class="text-xl font-semibold text-[#dad7cd]">{category}</h3>
				</div>
			</div>
		{/each}
	</div>
</section>
