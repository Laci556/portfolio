<script>
	import ImageGrid from './ImageGrid.svelte';

	export let index;
	export let images;
	export let mockup = false;
	export let tech = [];
</script>

<div class="flex h-full items-center">
	<div class="w-1/2">
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
		<div class="text-lg font-normal">
			<slot name="content" />
		</div>
	</div>

	<div class="ml-4 h-full w-1/2 flex-1 overflow-clip py-4 md:ml-8 lg:ml-16">
		<ImageGrid images={[...images, ...images]} {index} {mockup} />
	</div>
</div>
