<script lang="ts">
    import type { PageData } from "./$types";
    import StarAnimation from "../../components/starAnimation.svelte";
    
    type Article = {
      id: string;
      title: string;
      content: string;
      articleId: number;
      createdAt: string;
      updatedAt: string;
    };
    
    let { data } = $props<{ data: PageData }>();
    const articles = $derived(data.articles as Article[]);
    </script>
    
    <StarAnimation />
    
    <main class="flex flex-col flex-1 p-4 content-container">
      <section class="w-[90%] mx-auto py-10 sm:py-14">
        <!-- Blog Header -->
        <div class="text-center mb-12">
          <h2 class="font-bold text-4xl sm:text-5xl md:text-6xl text-gray-100 tracking-wide">
            My <span class="text-gradient">Blog</span>
          </h2>
          <p class="text-base sm:text-lg md:text-xl mt-4 text-gray-400">
            Thoughts, ideas, and projects I'm working on
          </p>
        </div>
    
        {#if articles.length > 0}
          <div class="overflow-hidden bg-gray-950/60 border border-gray-800 rounded-xl shadow-2xl shadow-gray-950 backdrop-blur-lg">
            <table class="w-full table-auto">
              <tbody class="divide-y divide-gray-800">
                {#each articles as article, i}
                  <tr
                    on:click={() => window.location.href = `/blog/${article.articleId}`}
                    class="group transition-all duration-300 ease-in-out hover:bg-gray-950 cursor-pointer"
                  >
                    <td class="px-6 py-5 whitespace-nowrap">
                      <h3 class="font-semibold text-lg text-gray-100 group-hover:text-green-400 transition-all">
                        {article.title}
                      </h3>
                      <p class="text-gray-400 truncate max-w-xs hidden md:block">{article.content}</p>
                    </td>
                    <td class="px-6 py-5 text-right hidden md:table-cell text-gray-500 text-sm">
                      {new Date(article.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                {/each}
              </tbody>
            </table>
          </div>
        {:else}
          <div class="text-center py-16 bg-gray-900/60 border border-gray-800 rounded-lg shadow-lg backdrop-blur-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-16 w-16 mx-auto text-gray-500 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
            <p class="text-xl text-gray-400">No articles found.</p>
           
          </div>
        {/if}
      </section>
    </main>
    
    <style>
    .text-gradient {
      background: linear-gradient(90deg, #38bdf8, #22c55e);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    </style>
    