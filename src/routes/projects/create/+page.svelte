<script lang="ts">
    import { enhance } from '$app/forms';
    import type { ActionData } from './$types';
    
    export let form: ActionData;
</script>

<div class="flex flex-col items-center justify-center min-h-screen p-4">
    <div class="w-full max-w-md">
        <h1 class="text-3xl font-bold mb-6 text-center">Post New Project</h1>
        
        {#if form?.error}
            <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                {form.error}
            </div>
        {/if}
        
        {#if form?.success}
            <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-4">
                Project created successfully!
            </div>
        {/if}
        
        <form method="POST" use:enhance class="bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4" enctype="multipart/form-data">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                    Name
                </label>
                <input 
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="name" 
                    type="text" 
                    name="name" 
                    placeholder="Project Name"
                    required
                />
            </div>
            
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="description">
                    Description
                </label>
                <textarea 
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="description" 
                    name="description" 
                    rows="8" 
                    placeholder="Project Description"
                    required
                ></textarea>
            </div>

            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="icon">
                    Project Icon
                </label>
                <input 
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="icon" 
                    name="icon" 
                    type="file"
                    accept="image/*"
                    required
                />
            </div>

            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="link">
                    Link
                </label>
                <input 
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="link" 
                    name="link" 
                    type="url"
                    placeholder="Project Link"
                    required
                />
            </div>

            <div class="flex items-center justify-between">
                <button 
                    class="bg-[#81a1c1] hover:bg-red-400 transition-all duration-400 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline w-full" 
                    type="submit"
                >
                    Publish Project
                </button>
            </div>
        </form>
        
        {#if form?.project}
            <div class="mt-8">
                <h2 class="text-xl font-semibold mb-2">Project Preview:</h2>
                <div class="bg-white shadow-md rounded px-6 py-4">
                    <h3 class="text-lg text-gray-600 font-bold">{form.project.name}</h3>
                    <p class="mt-2 text-gray-700">{form.project.description}</p>
                    {#if form.project.icon}
                        <img src={form.project.icon} alt={form.project.name} class="mt-4 max-w-xs" />
                    {/if}
                </div>
                <div class="mt-4 text-center">
                    <a href="/projects/{form.project.id}" class="text-blue-500 hover:underline">
                        View Full Project
                    </a>
                </div>
            </div>
        {/if}
    </div>
</div>