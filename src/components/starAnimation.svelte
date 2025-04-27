<script lang="ts">
import { onMount } from 'svelte';

onMount(() => {
    // Get all stars
    const stars = document.querySelectorAll('.star');

    // Only modify stars 6-10 (index 5-9)
    for (let i = 5; i < stars.length; i++) {
        // Generate random positions
        let randomTop = Math.floor(Math.random() * 150) * -1; // Random negative value between -150 and 0
        let randomLeft;

        // 50% chance of being on left or right side
        if (Math.random() > 0.5) {
            // Left side (negative values)
            randomLeft = Math.floor(Math.random() * 400) * -1; // -400 to 0
        } else {
            // Right side (positive values)
            randomLeft = Math.floor(Math.random() * 400); // 0 to 400
        }

        // Apply the random values - cast to HTMLElement
        const star = stars[i] as HTMLElement;
        star.style.top = `calc(${randomTop}px)`;
        star.style.left = `calc(${randomLeft}px)`;

        // Random animation delay between 1.5 and 3 seconds
        const randomDelay = (1.5 + Math.random() * 1.5).toFixed(1);
        star.style.animationDelay = `${randomDelay}s`;
    }
});
</script>

<style>
.night {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: -1;
}

.star {
    position: absolute;
    left: 0px;
    top: 0px;
    height: 4px;
    background: linear-gradient(-45deg, #dad7cd, rgba(0, 0, 255, 0));
    rotate: 45deg;
    border-radius: 999px;
    filter: drop-shadow(0 0 7px #699BFF);
    animation: tail 10s ease-in-out infinite,
        falling 10s ease-in-out infinite;
}

@keyframes tail {
    0% {
        width: 0;
    }
    30% {
        width: 100px;
    }
    100% {
        width: 0;
    }
}

@keyframes falling {
    0% {
        transform: translateX(0);
        opacity: 1;
    }
    50% {
        opacity: 1;
    }
    75% {
        opacity: 0.7;
    }
    100% {
        transform: translateX(500px);
        opacity: 0;
    }
}

.star:nth-child(1) {
    top: calc(-150px);
    left: calc(100vw + 150px);
    animation-delay: 1s;
}

.star:nth-child(2) {
    top: calc(-120px);
    left: calc(325px);
    animation-delay: 1.2s;
}

.star:nth-child(3) {
    top: calc(-100px);
    left: calc(-400px);
    animation-delay: 1.4s;
}

.star:nth-child(4) {
    top: calc(-140px);
    left: calc(-200px);
    animation-delay: 1.6s;
}

.star:nth-child(5) {
    top: calc(-60px);
    left: calc(325px);
    animation-delay: 1.8s;
}

.content-container {
    position: relative;
    z-index: 1;
}
</style>

<div class="night">
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
</div>