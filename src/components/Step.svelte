<script lang="ts">
    export let step: {
        name: string;
        icon: string;
        description: string;
        href?: string;
    };
</script>

<a
    href={step.href || "#"}
    class="p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg text-center cursor-pointer group hover:border-violet-400 duration-200"
>
    <div
        class="bg-slate-950 grid place-items-center px-4 text-5xl md:text-6xl -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto duration-200"
    >
        <i class={step.icon}></i>
    </div>
    <h3 class="font-medium text-xl sm:text-2xl md:text-3xl">
        {step.name}
    </h3>
    <slot />
    <div class="flex-1 flex justify-betweeen gap-4 items-end">
        <div
            class="ml-auto cursor-pointer hover:text-slate-950 transition-all ease-in-out duration-400 relative after:absolute after:top-0 after:h-0 after:right-full after:bg-[#dad7cd] after:w-full after:h-full after:duration-400 after:ease-in-out p-2 rounded-full hover:after:translate-x-full after:z-[-1] overflow-hidden"
        >
            <p class="z-4">Go to &rarr;</p>
        </div>
    </div>
</a>