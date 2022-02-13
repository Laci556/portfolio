<script>
	import ImageGrid from './ImageGrid.svelte';

	export let index;
	export let images;
	export let mockup = false;
	export let tech = [];
</script>

<div class="flex h-full flex-col items-center justify-between md:flex-row">
	<div class="mb-6 mt-8 w-full md:mb-0 md:mt-0 md:w-1/2">
		<div>
			<slot name="header" />
		</div>
		<div class="my-4">
			<h3 class="text-lg font-medium">
				<slot name="desc" />
			</h3>
			<div class="mt-1 flex opacity-90">
				{#each tech as t, i}
					<p class="font-medium">{t}</p>
					{#if i < tech.length - 1}
						<p class="mx-2">•</p>
					{/if}
				{/each}
			</div>
		</div>
		<div class="font-normal md:text-lg">
			<slot name="content" />
		</div>
	</div>

	<div
		class="mb-2 w-full flex-1 overflow-hidden py-4 md:mb-0 md:ml-8 md:h-full md:max-h-full md:w-1/2 lg:ml-16"
	>
		<ImageGrid images={[...images, ...images]} {index} {mockup} />
	</div>
</div>
