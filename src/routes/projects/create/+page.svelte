<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<div class="flex min-h-screen flex-col items-center justify-center p-4">
	<div class="w-full max-w-md">
		<h1 class="mb-6 text-center text-3xl font-bold">Post New Project</h1>

		{#if form?.error}
			<div class="mb-4 rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700">
				{form.error}
			</div>
		{/if}

		{#if form?.success}
			<div class="mb-4 rounded-lg border border-green-400 bg-green-100 px-4 py-3 text-green-700">
				Project created successfully!
			</div>
		{/if}

		<form
			method="POST"
			use:enhance
			class="mb-4 rounded-xl bg-white px-8 pt-6 pb-8 shadow-md"
			enctype="multipart/form-data"
		>
			<div class="mb-4">
				<label class="mb-2 block text-sm font-bold text-gray-700" for="name"> Name </label>
				<input
					class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
					id="name"
					type="text"
					name="name"
					placeholder="Project Name"
					required
				/>
			</div>

			<div class="mb-6">
				<label class="mb-2 block text-sm font-bold text-gray-700" for="description">
					Description
				</label>
				<textarea
					class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
					id="description"
					name="description"
					rows="8"
					placeholder="Project Description"
					required
				></textarea>
			</div>
			<div class="mb-6">
				<label class="mb-2 block text-sm font-bold text-gray-700" for="blog"> Blog </label>
				<textarea
					class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
					id="blog"
					name="blog"
					rows="8"
					placeholder="Project blog"
					required
				></textarea>
			</div>

			<div class="mb-6">
				<label class="mb-2 block text-sm font-bold text-gray-700" for="icon"> Project Icon </label>
				<input
					class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
					id="icon"
					name="icon"
					type="file"
					accept="image/*"
					required
				/>
			</div>

			<div class="mb-6">
				<label class="mb-2 block text-sm font-bold text-gray-700" for="link"> Link </label>
				<input
					class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
					id="link"
					name="link"
					type="url"
					placeholder="Project Link"
					required
				/>
			</div>

			<div class="flex items-center justify-between">
				<button
					class="focus:shadow-outline w-full rounded-xl bg-[#81a1c1] px-4 py-2 font-bold text-white transition-all duration-400 hover:bg-red-400 focus:outline-none"
					type="submit"
				>
					Publish Project
				</button>
			</div>
		</form>

		{#if form?.project}
			<div class="mt-8">
				<h2 class="mb-2 text-xl font-semibold">Project Preview:</h2>
				<div class="rounded bg-white px-6 py-4 shadow-md">
					<h3 class="text-lg font-bold text-gray-600">{form.project.name}</h3>
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
