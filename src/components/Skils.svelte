<script>
	const skillsBar = {
		Golang: 4,
		TypeScript: 5,
		React: 5,
		Next: 5,
		Svelte: 4,
		TailwindCSS: 5,
		AWS: 3,
		Express: 5,
		PostgreSQL: 5,
		MongoDB: 5,
		Firebase: 4,
		Git: 3,
		Docker: 3,
		Linux: 5,
		C: 3,
	};
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

	const skillCounts = Object.entries(skillsBar).map(([category, count]) => ({ category, count }));
	const maxCount = Math.max(...skillCounts.map((s) => s.count));
</script>

<section id="skills" class="mx-auto max-w-8xl px-6 py-16 sm:px-12 lg:px-24">
	<h1 class="mb-12 text-center text-4xl font-bold tracking-wide text-gray-100">Skills</h1>

	<div class="grid gap-12 sm:grid-cols-2">
		<!-- Skill Tags with Modern Glassmorphism Style -->
		<div
			class="relative flex min-h-full flex-col items-center justify-center rounded-2xl border border-gray-700 bg-slate-900 p-6 shadow-xl shadow-gray-900 backdrop-blur-md"
		>
			<div
				class="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-400 to-blue-500 opacity-10"
			></div>

			<div class="z-10 flex flex-wrap justify-center gap-3">
				{#each Object.entries(skills) as [category]}
					<span
						class="cursor-pointer rounded-full bg-gray-800 from-green-400 to-blue-500 px-4 py-2 text-sm
                                font-medium text-gray-200 shadow-md transition-all
                                duration-300 hover:bg-gradient-to-r hover:text-gray-900"
					>
						{category}
					</span>
				{/each}
			</div>
		</div>
		<!-- Skills List with Progress Bars -->
		<div
			class="flex flex-col justify-center rounded-2xl border border-gray-800 bg-gray-900 p-6 shadow-lg"
		>
			<div class="space-y-5">
				{#each skillCounts as { category, count }}
					<div class="flex items-center gap-4">
						<div class="w-32 text-lg font-semibold text-gray-300 capitalize">{category}</div>
						<div
							class="relative h-4 flex-1 overflow-hidden rounded-full border border-gray-700 bg-gray-800"
						>
							<div
								class="h-full rounded-full bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-1000 ease-out"
								style="width: {(count / maxCount) * 100}%"
							></div>
						</div>
						<div class="w-10 text-right font-medium text-gray-400">{count}</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
