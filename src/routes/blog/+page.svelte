<script lang="ts">
import type { PageData } from "./$types";

type Article = {
  id: string;
  title: string;
  content: string;
  authorId: number;
  createdAt: string;
  updatedAt: string;
};

let { data } = $props<{data: PageData}>();
const articles = $derived(data.articles as Article[]);
</script>

<main class="flex flex-col flex-1 p-4">
    <section class="max-w-[1400px] mx-auto py-8 sm:py-14">
        <div class="text-center mb-10">
            <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl text-[#dad7cd]">
                My <span class="poppins text-orange-400">Blog</span>
            </h2>
            <p class="text-base sm:text-lg md:text-xl mt-4">
                Thoughts, ideas, and projects I'm working on
            </p>
        </div>

        {#if articles.length > 0}
            <div class="overflow-x-auto bg-slate-800/30 border border-slate-700 rounded-lg shadow-lg">
                <table class="min-w-full table-auto">
                    <thead>
                        <tr class="bg-slate-900">
                            <th class="px-6 py-4 text-left text-sm font-semibold text-orange-400">Title</th>
                            <th class="px-6 py-4 text-left text-sm font-semibold text-orange-400 hidden md:table-cell">Preview</th>
                            <th class="px-6 py-4 text-left text-sm font-semibold text-orange-400">Date</th>
                            <th class="px-6 py-4 text-right text-sm font-semibold text-orange-400">Action</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-700">
                        {#each articles as article, i}
                            <tr class={`${i % 2 === 0 ? 'bg-slate-800/50' : 'bg-slate-800/20'} transition-colors hover:bg-slate-700/50`}>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <h3 class="font-semibold text-lg text-[#dad7cd]">{article.title}</h3>
                                </td>
                                <td class="px-6 py-4 hidden md:table-cell">
                                    <p class="text-gray-300 truncate max-w-xs">{article.content}</p>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-gray-400 text-sm">
                                    {new Date(article.createdAt).toLocaleDateString()}
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-right">
                                    <a href={`/blog/${article.id}`} class="inline-flex items-center text-orange-400 hover:text-orange-300">
                                        Read
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                        </svg>
                                    </a>
                                </td>
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
            
            <div class="mt-6 flex justify-end">
                <a href="/postArticle" class="poppins relative overflow-hidden px-6 py-3 group rounded-full bg-orange-200 text-slate-950">
                    <div class="absolute top-0 right-full w-full h-full bg-orange-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div>
                    <span class="relative z-9 flex items-center">
                        New Article
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                        </svg>
                    </span>
                </a>
            </div>
        {:else}
            <div class="text-center py-20 bg-slate-800/30 rounded-lg border border-slate-700">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-gray-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                <p class="text-xl text-gray-400">No articles found.</p>
                <a href="/postArticle" class="inline-block mt-6 poppins relative overflow-hidden px-6 py-3 group rounded-full bg-orange-200 text-slate-950">
                    <div class="absolute top-0 right-full w-full h-full bg-orange-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div>
                    <span class="relative z-9">Create your first post &rarr;</span>
                </a>
            </div>
        {/if}
    </section>
</main>