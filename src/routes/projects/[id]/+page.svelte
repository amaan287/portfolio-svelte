<script lang="ts">
    import type { PageData } from './$types';
    import StarAnimation from '../../../components/starAnimation.svelte';
    
    let { data } = $props<{data: PageData}>();
    const project = $derived(data.project);
</script>

<StarAnimation />

<main class="flex flex-col flex-1 p-4 content-container">
    <section class="w-full max-w-4xl mx-auto py-8 sm:py-14">
        <article class="bg-black border border-gray-800 rounded-xl shadow-lg shadow-gray-900 p-8">
            <header class="mb-8">
                <h1 class="font-semibold text-3xl sm:text-4xl md:text-5xl text-[#dad7cd] mb-4">
                    {project.name}
                </h1>
                <div class="flex justify-between items-center text-gray-400 text-sm">
                    <time>{new Date(project.createdAt).toLocaleDateString()}</time>
                </div>
            </header>
            
            {#if project.icon}
                <img 
                    src={project.icon} 
                    alt={project.name} 
                    class="w-full h-64 object-cover rounded-lg mb-8"
                />
            {/if}
            
            <div class="prose prose-invert max-w-none">
                <p class="text-gray-300 whitespace-pre-line leading-relaxed">
                    {project.description}
                </p>
            </div>
            
            <div class="mt-10 pt-6 border-t border-gray-800">
                <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="inline-flex items-center text-[#81a1c1] hover:text-[#5e81ac] transition-colors duration-300"
                >
                    View Live Project
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </a>
            </div>
        </article>
    </section>
</main> 