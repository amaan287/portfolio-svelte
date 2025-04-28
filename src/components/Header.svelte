<script lang="ts">
	export let y: number;
	const tabs = [
		{
			name: 'Projects',
			href: '/projects'
		},
		{
			name: 'About',
			href: '#about'
		},
		{
			name: 'blog',
			href: '/blog'
		}
	];
</script>

<header
	class={'sticky top-0 z-[10] flex items-center justify-between  px-6 ' +
		(y > 0
			? 'border-b border-white/10 bg-slate-950/10 py-4 backdrop-blur-sm'
			: 'border-transparent bg-black py-6')}
>
	<a href="/">
		<h1 class={'font-medium'}>
			<b class={'poppins font-bold'}>Amaan</b> mirza
		</h1>
	</a>
	<div class={'hidden items-center gap-6 sm:flex'}>
		{#each tabs as tab, index}
			<a class="duration-200 hover:text-orange-300" href={tab.href}><p>{tab.name}</p></a>
		{/each}

		<button
			class="blueShadow group relative overflow-hidden rounded-full bg-orange-100 px-5 py-2 text-slate-950"
		>
			<div
				class="absolute top-0 right-full z-0 h-full w-full bg-[#81a1c1] opacity-20 duration-200 group-hover:translate-x-full"
			></div>
			<a href="/blog">
				<h4 class="relative z-9">Get in touch</h4>
			</a>
		</button>
	</div>
</header>
