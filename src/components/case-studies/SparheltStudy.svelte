<script>
	import CaseStudy from '../CaseStudy.svelte';
	import HomeSection from '../HomeSection.svelte';
	import LinkButton from '../LinkButton.svelte';
</script>

<HomeSection class="flex items-center justify-center" background="#dafcf4" text="#05392c">
	<CaseStudy
		images={[5, 3, 2, 1, 4].map((v) => `sparhelt/sparhelt${v}.png`)}
		index={5}
		tech={['Electron', 'Svelte', 'Firebase', 'Vue']}
	>
		<svelte:fragment slot="header">
			<img src="images/sparhelt/Sparhelt.svg" alt="Sparhelt logo" class="w-32" />
		</svelte:fragment>
		<svelte:fragment slot="desc"
			>Website and POS software for Sparhelt Pizzéria in Eger</svelte:fragment
		>
		<svelte:fragment slot="content">
			<p class="mb-4">
				Website and POS software built for the specific needs of the restaurant. The system
				developed using modern web technologies helped the newly opened restaurant grow and complete
				thousands of deliveries in the first 10 months <span class="inline-block"
					>(Apr 2020 - Jan 2021).</span
				>
			</p>
			<div class="flex gap-2">
				<LinkButton href="https://github.com/Laci556/pizza" background="#dafcf4" text="#05392c"
					>GitHub (POS)</LinkButton
				>
				<LinkButton href="https://github.com/Laci556/pizza-web" background="#dafcf4" text="#05392c"
					>GitHub (website)</LinkButton
				>
			</div>
		</svelte:fragment>
	</CaseStudy>
</HomeSection>
