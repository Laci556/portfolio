<script>
	import HomeSection from '../HomeSection.svelte';
	import CaseStudy from '../CaseStudy.svelte';
	import LinkButton from '../LinkButton.svelte';
</script>

<HomeSection class="flex items-center justify-center" background="#FBE8DE" text="#160034">
	<CaseStudy
		images={[3, 7, 6, 2, 1, 4, 5].map((v) => `loceatr${v}.jpg`)}
		index={4}
		mockup={true}
		tech={['React Native', 'Supabase']}
	>
		<svelte:fragment slot="header">
			<h2 class="text-3xl font-bold">loc<span class="text-[#4CA96D]">eat</span>r</h2>
		</svelte:fragment>
		<svelte:fragment slot="desc">Find small restaurants near you</svelte:fragment>
		<svelte:fragment slot="content">
			<p class="mb-4">
				loceater is a cross platform mobile app that helps users discover smaller nearby places and
				growing businesses gain more customers. It was developed as a prototype for my business
				management university course. All the restaurants, cafes, bars — based on the users’
				preferences and locations — have equal chances of being recommended at a random time.
			</p>
			<LinkButton href="https://github.com/Laci556/loceatr" text="#160034" background="#FBE8DE"
				>GitHub</LinkButton
			>
		</svelte:fragment>
	</CaseStudy>
</HomeSection>
