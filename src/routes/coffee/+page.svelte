<script lang="ts">
    import { enhance } from '$app/forms';
    import type { ActionData } from './$types';
    import StarAnimation from '../../components/starAnimation.svelte';
    
    type Order = {
        id: string;
        amount: string;
        currency: string;
    };

    type FormData = {
        success?: boolean;
        error?: string;
        order?: Order;
    };
    
    export let form: FormData = {};
    
    let amount = '50000'; // Default 500 INR
    
    function handlePayment(order: Order) {
        const options = {
            key: import.meta.env.VITE_RAZORPAY_KEY,
            amount: order.amount,
            currency: order.currency,
            name: "Amaan's Portfolio",
            description: "Buy me a coffee",
            order_id: order.id,
            handler: function (response: any) {
                console.log('Payment successful:', response);
                // Handle successful payment
            },
            prefill: {
                name: "",
                email: "",
                contact: ""
            },
            theme: {
                color: "#81a1c1"
            }
        };
        
        const rzp = new (window as any).Razorpay(options);
        rzp.open();
    }
</script>

<svelte:head>
    <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
</svelte:head>

<StarAnimation />

<main class="flex flex-col items-center justify-center min-h-screen p-4">
    <div class="w-full max-w-md">
        <h1 class="text-3xl font-bold mb-6 text-center text-[#dad7cd]">Buy Me a Coffee</h1>
        
        {#if form?.error}
            <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                {form.error}
            </div>
        {/if}
        
        <form method="POST" use:enhance class="bg-black border border-gray-800 shadow-md rounded-xl px-8 pt-6 pb-8 mb-4">
            <div class="mb-6">
                <label class="block text-[#dad7cd] text-sm font-bold mb-2" for="amount">
                    Amount (in paise)
                </label>
                <input 
                    class="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-[#dad7cd] bg-gray-900 leading-tight focus:outline-none focus:shadow-outline" 
                    id="amount" 
                    type="number" 
                    name="amount" 
                    bind:value={amount}
                    placeholder="50000"
                    required
                />
                <p class="text-gray-400 text-xs mt-1">50000 = ₹500</p>
            </div>
            
            <div class="flex items-center justify-between">
                <button 
                    class="bg-[#81a1c1] hover:bg-[#5e81ac] transition-all duration-400 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline w-full" 
                    type="submit"
                >
                    Buy Coffee
                </button>
            </div>
        </form>
        
        {#if form?.success && form?.order}
            <div class="mt-8 text-center">
                <p class="text-[#dad7cd] mb-4">Ready to buy me a coffee?</p>
                <button 
                    class="bg-[#81a1c1] hover:bg-[#5e81ac] transition-all duration-400 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
                    on:click={() => form.order && handlePayment(form.order)}
                >
                    Proceed to Payment
                </button>
            </div>
        {/if}
    </div>
</main>
