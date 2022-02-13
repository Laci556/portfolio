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

	// 857885
	// D9E5D6
</script>

<svelte:head>
	<title>Bucsai László</title>
</svelte:head>

<div
	id="main-scroll"
	class="transition-colors duration-500 bg-[{$bg}] h-screen snap-y snap-mandatory overflow-y-scroll overscroll-contain"
>
	<HomeSection
		let:firstVisible
		class="flex items-center justify-center font-black"
		background="#D9E5D6"
		text="#096971"
	>
		<div>
			{#if firstVisible}
				<h3 class="text-2xl opacity-75" in:fly={{ delay: 100, duration: 300, x: 10 }} intro>
					Hi, I'm
				</h3>
				<h1 class="my-2 mx-4 text-5xl" in:scale={{ delay: 500, duration: 500, start: 0.9 }}>
					László Bucsai
				</h1>
				<h3 class="text-right text-2xl opacity-75" in:fly={{ delay: 1100, duration: 300, x: -10 }}>
					Full stack web developer
				</h3>
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
			<p class="mb-20 max-w-xl text-center text-2xl" in:fade>
				I’m a Computer Science student at ELTE who loves experimenting with new technologies and
				creating cool apps.
			</p>
			<p class="text-3xl" in:fade={{ delay: 300 }}>Take a look at some of my work</p>
		{/if}
	</HomeSection>

	<ScoreBoardStudy />

	<LoceatrStudy />

	<SparheltStudy />

	<Contact />
</div>
