<script lang="ts">
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
	let y = 0;
	let innerHeight = 0;
	let innerWidth = 0;
	function goTop() {
		document.body.scrollIntoView();
	}

	let { children } = $props();
</script>

<div
	class="relative mx-auto flex min-h-screen w-full w-screen flex-col text-sm sm:text-base
"
>
	<div
		class={'fixed-bottom-0 z-[10] flex w-full p-10 duration-200' +
			(y > 0 ? 'opacity-full pointer-events-auto' : 'pointer-events-none hidden opacity-0')}
	>
		<button
			on:click={goTop}
			class="ml-auto rounded-full bg-white px-3 py-2 text-gray-900 shadow-lg transition-all duration-200 hover:bg-gray-100 sm:px-4"
		>
			<i class="fa-solid fa-arrow-up grid aspect-square place-items-center" />
		</button>
	</div>

	<Header {y} />
	{@render children()}
	<Footer />
</div>
<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />
