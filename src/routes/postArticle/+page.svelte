<script lang="ts">
    import { enhance } from '$app/forms';
    import type { ActionData } from './$types';
    
    export let form: ActionData;
</script>

<div class="flex flex-col items-center justify-center min-h-screen p-4">
    <div class="w-full max-w-md">
        <h1 class="text-3xl font-bold mb-6 text-center">Post New Article</h1>
        
        {#if form?.error}
            <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                {form.error}
            </div>
        {/if}
        
        {#if form?.success}
            <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-4">
                Article created successfully!
            </div>
        {/if}
        
        <form method="POST" use:enhance class="bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
                    Title
                </label>
                <input 
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="title" 
                    type="text" 
                    name="title" 
                    placeholder="Article Title"
                    required
                />
            </div>
            
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="content">
                    Content
                </label>
                <textarea 
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="content" 
                    name="content" 
                    rows="8" 
                    placeholder="Article Content"
                    required
                ></textarea>
            </div>
            
            <div class="flex items-center justify-between">
                <button 
                    class="bg-[#81a1c1] hover:bg-red-400 transition-all duration-400 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline w-full" 
                    type="submit"
                >
                    Publish Article
                </button>
            </div>
        </form>
        
        {#if form?.article}
            <div class="mt-8">
                <h2 class="text-xl font-semibold mb-2">Article Preview:</h2>
                <div class="bg-white shadow-md rounded px-6 py-4">
                    <h3 class="text-lg text-gray-600 font-bold">{form.article.title}</h3>
                    <p class="mt-2 text-gray-700">{form.article.content}</p>
                </div>
                <div class="mt-4 text-center">
                    <a href="/blog/{form.article.id}" class="text-blue-500 hover:underline">
                        View Full Article
                    </a>
                </div>
            </div>
        {/if}
    </div>
</div>