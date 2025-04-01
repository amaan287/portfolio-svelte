<script>
    const skills = {
        frontend: ['JavaScript', 'React', 'Next.js', 'Svelte',],
        backend: ['Node.js', 'Bun',  'Express.js', 'Go', 'C' ],
        database: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Redis'],
        tools: ['Git', 'GitHub', 'VSCode', 'Postman', 'Docker', ]
    };

    // Calculate skill counts for the graph
    const skillCounts = Object.entries(skills).map(([category, items]) => ({
        category,
        count: items.length
    }));

    // Find max count for percentage calculation
    const maxCount = Math.max(...skillCounts.map(s => s.count));
</script>

<section id="skills" class="py-16 px-4 sm:px-6 lg:px-8 mx-auto">
    <h1 class="text-4xl font-bold text-center mb-12 text-[#dad7cd">Skills</h1>

    <div class="max-w-4xl mx-auto">
        <div class="space-y-6">
            {#each skillCounts as {category, count}}
                <div class="flex items-center gap-4">
                    <div class="w-32 font-semibold text-orange-400 capitalize">{category}</div>
                    <div class="flex-1 h-8 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                            class="h-full bg-orange-400 rounded-full transition-all duration-1000 ease-out"
                            style="width: {(count / maxCount) * 100}%"
                        ></div>
                    </div>
                    <div class="w-12 text-right text-slate-600">{count}</div>
                </div>
            {/each}
        </div>

        <div class="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {#each Object.entries(skills) as [category, items]}
                <div class="bg-white rounded-lg shadow p-4">
                    <h3 class="font-semibold text-slate-800 capitalize mb-2">{category}</h3>
                    <div class="flex flex-wrap gap-2">
                        {#each items as item}
                            <span class="px-2 py-1 bg-slate-100 text-slate-600 rounded-full text-xs">
                                {item}
                            </span>
                        {/each}
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>
