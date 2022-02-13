<script>
	import HomeSection from '../HomeSection.svelte';
	import CaseStudy from '../CaseStudy.svelte';
	import LinkButton from '../LinkButton.svelte';
</script>

<HomeSection class="flex items-center justify-center" background="#f9edc8" text="#372b06">
	<CaseStudy
		images={[1, 7, 6, 2, 4, 3, 5].map((v) => `scoreboard${v}.jpg`)}
		index={3}
		tech={['Electron', 'Svelte']}
	>
		<svelte:fragment slot="header">
			<h2 style="font-family: 'Avenir Next', sans-serif;" class="text-2xl font-bold tracking-wide">
				SCORE<span class="ml-1 bg-[#372b06] px-1 text-[#f9edc8]">BOARD</span>
			</h2>
		</svelte:fragment>
		<svelte:fragment slot="desc"
			>A scoreboard controller developed for the sports center in Balmazújváros</svelte:fragment
		>
		<svelte:fragment slot="content">
			<p class="mb-4">
				The program was designed with mainly handball in mind, but it’s easily extendable so it can
				be used for any sport. Integration with the Hungarian Handball Association’s (MKSZ) API
				allows for tracking real time statistics of the matches and fetching players’ data. The
				application is currently operating in test phase and has proven to be faster and more
				feature rich than the old solution. We are working on releasing the first public version in
				the coming months.
			</p>
			<LinkButton background="#f9edc8" text="#372b06" disabled>Website soon</LinkButton>
		</svelte:fragment>
	</CaseStudy>
</HomeSection>
