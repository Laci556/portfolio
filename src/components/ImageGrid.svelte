<script>
	import { onDestroy, onMount } from 'svelte';
	import { browser } from '$app/env';
	import PhoneMockup from './PhoneMockup.svelte';

	export let images;
	export let mockup;
	let pageScroll, viewHeight;

	export let index;

	// if (mockup) {
	// 	console.log(images);
	// }

	function getParallax(scroll) {
		let maxParallax = -25;

		if (scroll < (index - 2) * viewHeight) {
			return 0;
		} else if (scroll > index * viewHeight) {
			return maxParallax;
		}
		let scrollPercentage = scroll / 2 / viewHeight - index / 2 + 1;
		return scrollPercentage * maxParallax;
	}

	function scrollListener(e) {
		pageScroll = e.target.scrollTop;
	}

	onMount(() => {
		viewHeight = window.innerHeight;
		pageScroll = document.querySelector('#main-scroll').scrollTop;

		document.querySelector('#main-scroll').addEventListener('scroll', scrollListener);

		return () => {
			document.querySelector('#main-scroll').removeEventListener('scroll', scrollListener);
		};
	});
</script>

<svelte:window bind:innerHeight={viewHeight} />

<div class="h-full overflow-clip rounded-sm">
	<div class="flex gap-4">
		<div
			class="flex flex-1 flex-col gap-4"
			style="transform: translateY({getParallax(pageScroll)}%);"
		>
			{#each images.filter((_, i) => !(i % 2)) as img}
				{#if mockup}
					<PhoneMockup image="images/loceatr/{img}" />
				{:else}
					<img src="images/{img}" alt="" class="rounded-sm" />
				{/if}
			{/each}
		</div>
		<div
			class="flex flex-1 flex-col gap-4"
			style="transform: translateY({getParallax(pageScroll) / 1.5}%);"
		>
			{#each images.filter((_, i) => i % 2) as img}
				{#if mockup}
					<PhoneMockup image="images/loceatr/{img}" />
				{:else}
					<img src="images/{img}" alt="" class="rounded-sm" />
				{/if}
			{/each}
		</div>
	</div>
</div>
