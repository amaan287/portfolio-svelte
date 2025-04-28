<script lang="ts">
	import About from './About.svelte';
	import Projects from './Projects.svelte';
	import Skils from './Skils.svelte';
	import { page } from '$app/stores';
	
	type PageData = {
		projects: {
			id: string;
			name: string;
			description: string;
			icon: string | null;
			link: string;
			createdAt: Date;
			updatedAt: Date;
		}[];
	};
	
	const projectsData = $derived($page.data as PageData);
</script>

<main class="mx-auto flex flex-1 flex-col p-4">
	<section
		id="introPage"
		class="mx-auto grid max-w-[1300px] grid-cols-1 gap-10 py-8 sm:py-14 lg:grid-cols-2"
	>
		<div class="flex flex-col gap-6 text-center md:gap-8 lg:justify-center lg:gap-10 lg:text-left">
			<h2 class="text-4xl font-semibold text-[#dad7cd] sm:text-5xl md:text-6xl">
				Hi! I'm <span class="poppins p text-[#81a1c1]">Amaan</span> Mirza
				<br />Full Stack
				<span class="poppins text-[#81a1c1]">Developer</span>
			</h2>
			<p class="text-base sm:text-lg md:text-xl">
				My <span class="text-[#81a1c1]"> favorite tech</span> includes JavaScript (NEXT.JS or SvelteKit),
				TailwindCSS, Node.js + Express.js & PostgreSQL or Firebase/Firestore!
			</p>
			<button
				class="blueShadow poppins group relative mx-auto overflow-hidden rounded-full bg-orange-200 px-6 py-3 text-base text-slate-950 sm:text-lg md:text-xl lg:mr-auto lg:ml-0"
			>
				<div
					class="absolute top-0 right-full z-0 h-full w-full bg-[#81a1c1] opacity-20 duration-200 group-hover:translate-x-full"
				></div>
				<h4 class="relative z-9">Get in touch &rarr;</h4>
			</button>
		</div>
		<div class="relative grid place-items-center shadow-2xl">
			<img src={'images/profile.png'} alt="loading..." class="z-[2] max-h-[70vh] object-cover" />
		</div>
		<!-- <div  class="flex p-0.5 relative max-w-[700px] w-full mx-auto">
            <div
                class="absolute inset-0 overflow-hidden rounded-md flex items-center justify-center"
            >
                <div
                    class="bg-gradient-to-r absolute inset-[-20px]  from-violet-800 to-indigo-800 specialSpin"
                />
            </div>

            <img
                src={"images/zetane-engine.jpeg"}
                alt="Zetane Engine"
                class="w-full h-full object-cover z-[2]"
            />
        </div> -->
	</section>
	<Skils />
	<Projects data={projectsData} />
	<About />
</main>
