<script lang="ts">
    export let y: number;
    export let innerHeight: number;
    const tabs = [
        {
            name: 'Projects',
            href: '#projects'
        },
        {
            name: 'About',
            href: '#about'
        },
        {
            name: 'blog',
            href: '#blog'
        },
    ]
</script>

<header class={'sticky top-0 z-[10] flex items-center justify-between  px-6 ' + (y>0?'py-4 bg-slate-950/10 backdrop-blur-sm border-b border-white/10':'py-6 bg-black border-transparent')}>
    <a href="/">

        <h1 class={'font-medium'}>
            <b class={'poppins font-bold'}>Amaan</b> mirza
        </h1>
    </a>
    <div class={'sm:flex items-center gap-6 hidden'}>
        {#each tabs as tab,index}
            <a class="duration-200 hover:text-orange-300" href={tab.href}><p>{tab.name}</p></a>
            {/each}
            
            <button
            class="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-orange-100 text-slate-950"
            >
            <div
            class="absolute top-0 right-full w-full h-full bg-orange-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
            ></div>
            <a href="/blog">
                <h4 class="relative z-9">Get in touch</h4>
            </a>
        </button>
    </div>

</header>