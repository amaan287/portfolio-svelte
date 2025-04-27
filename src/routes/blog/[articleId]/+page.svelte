<script lang="ts">
    import type { PageData } from "./$types";
    import StarAnimation from "../../../components/starAnimation.svelte";
    
    let { data } = $props<{data: PageData}>();
    const article = $derived(data.article);
</script>

<StarAnimation />

<main class="flex flex-col flex-1 p-6 content-container mx-auto">
    <section class="w-full max-w-7xl mx-auto py-6 sm:py-14">
        {#if article}
            <article class="bg-black border border-gray-800 rounded-xl shadow-lg shadow-gray-900 bg-opacity-20 p-8">
                <header class="mb-8">
                    <h1 class="font-semibold text-3xl sm:text-4xl md:text-5xl text-[#dad7cd] mb-4">
                        {article.title}
                    </h1>
                    <div class="flex justify-between items-center text-gray-400 text-sm">
                        <time>{new Date(article.createdAt).toLocaleDateString()}</time>
                    </div>
                </header>
                
                <div class="prose prose-invert max-w-none">
                    <p class="text-gray-200 text-lg whitespace-pre-line leading-relaxed">
                        {article.content}
                    </p>
                </div>
                
                <div class="mt-10 pt-6 border-t border-gray-800">
                    <a href="/blog" class="inline-flex items-center text-gray-400 hover:text-gray-300 transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 rotate-180" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                        Back to all articles
                    </a>
                </div>
            </article>
        {:else}
            <div class="text-center py-20 bg-black rounded-lg border border-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-gray-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p class="text-xl text-gray-400">Article not found</p>
                <a href="/blog" class="inline-block mt-6 px-6 py-3 bg-black text-gray-300 border border-gray-700 rounded-lg hover:bg-gray-900 transition-colors duration-300">
                    Return to blog
                </a>
            </div>
        {/if}
    </section>  
</main>
