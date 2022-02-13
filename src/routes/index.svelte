<script>
	import {
		HomeSection,
		ScoreBoardStudy,
		LoceatrStudy,
		SparheltStudy,
		Contact
	} from '../components';
	import { bg } from '../store';
	import { fade, fly, scale } from 'svelte/transition';
	import { onMount } from 'svelte';

	// 857885
	// D9E5D6

	let ch;
	onMount(() => {
		ch = window.innerHeight;
	});
</script>

<svelte:head>
	<meta name="theme-color" content={$bg} />
</svelte:head>

<svelte:window bind:innerHeight={ch} />

{#if ch}
	<div
		id="main-scroll"
		style="height: {ch}px"
		class="transition-colors duration-500 bg-[{$bg}] snap-y snap-mandatory overflow-y-scroll overscroll-contain overscroll-x-none"
	>
		<HomeSection
			let:firstVisible
			class="flex flex-col items-center justify-between font-black"
			background="#D9E5D6"
			text="#096971"
		>
			<div class="h-16 w-full" />

			<div>
				{#if firstVisible}
					<h3
						class="text-xl opacity-75 md:text-2xl"
						in:fly={{ delay: 100, duration: 300, x: 10 }}
						intro
					>
						Hi, I'm
					</h3>
					<h1
						class="my-2 mx-4 text-4xl md:text-5xl"
						in:scale={{ delay: 500, duration: 500, start: 0.9 }}
					>
						László Bucsai
					</h1>
					<h3
						class="text-right text-xl opacity-75 md:text-2xl"
						in:fly={{ delay: 1100, duration: 300, x: -10 }}
					>
						Full stack web developer
					</h3>
				{/if}
			</div>

			<div class="flex h-16 -translate-x-2 flex-col items-center opacity-75">
				{#if firstVisible}
					<p class="mb-2 animate-bounce text-center text-lg" in:fade={{ delay: 1500 }}>
						Scroll down for more
					</p>
				{/if}
			</div>
		</HomeSection>

		<HomeSection
			let:firstVisible
			class="flex flex-col items-center justify-center font-bold"
			background="#D9E5D6"
			text="#096971"
		>
			{#if firstVisible}
				<p class="mb-20 max-w-2xl text-center text-xl md:text-2xl" in:fade>
					I’m a Computer Science student at ELTE who loves experimenting with new technologies and
					creating cool apps.
				</p>
				<p class="text-center text-2xl md:text-3xl" in:fade={{ delay: 300 }}>
					Take a look at some of my work
				</p>
			{/if}
		</HomeSection>

		<ScoreBoardStudy />

		<LoceatrStudy />

		<SparheltStudy />

		<Contact />
	</div>
{/if}
