<script>
	import HomeSection from './HomeSection.svelte';
</script>

<p class="bg-[#e8def7] text-[#231042]" />

<HomeSection background="#e8def7" text="#231042" class="flex flex-col">
	<div class="flex flex-1 items-center">
		<div class="flex flex-col gap-12 md:flex-row md:gap-8">
			<div class="w-full">
				<h2 class="mb-6 text-xl font-bold md:text-2xl">Programming experience</h2>
				<p class="mb-4 text-base font-medium md:text-lg">
					I have been developing websites for 3+ years using JavaScript frameworks. I have
					experience with <span class="inline-block"
						><b>Svelte</b>
						<img
							src="icons/svelte-svgrepo-com.svg"
							alt="Svelte"
							class="inline w-3.5 md:w-4"
						/>,</span
					>
					<span class="inline-block"
						><b>React / React Native</b>
						<img src="icons/react-svgrepo-com.svg" alt="React" class="inline w-4 md:w-5" /></span
					>
					and
					<span class="inline-block"
						><b>Vue</b>
						<img src="icons/vue-svgrepo-com.svg" alt="React" class="w-3.4 inline md:w-4" />.</span
					>
				</p>
				<p class="text-base font-medium md:text-lg">
					For my projects’ back-end <span class="inline-block"
						><b>Node.js</b>
						<img
							src="icons/logo-nodejs-svgrepo-com.svg"
							alt="React"
							class="inline w-4 md:w-5"
						/></span
					>
					is my go-to, using <b>Express</b> or <b>serverless</b> functions to build APIs, however, I
					am a huge fan of BaaS solutions such as <b>Firebase</b> and <b>Supabase</b>. I am
					currently learning and experimenting with
					<span class="inline-block"
						><b>Flutter</b>
						<img src="icons/flutter-svgrepo-com.svg" alt="React" class="inline w-3.5" /></span
					>
					and
					<span class="inline-block"
						><b>Go</b>
						<img src="icons/go-svgrepo-com.svg" alt="React" class="inline w-6 md:w-7" />.</span
					>
				</p>
			</div>
			<div class="w-full">
				<h2 class="mb-6 text-lg font-bold md:text-xl">Are you interested in working with me?</h2>
				<p class="mb-3 text-base font-medium md:mb-8 md:text-lg">
					Email me at <a href="mailto:bucsailaca@gmail.com" class="underline"
						>bucsailaca@gmail.com</a
					>.
				</p>
				<p class="mb-4 text-base font-medium md:mb-8 md:text-lg">
					You can find me on GitHub as <a class="underline" href="https://github.com/Laci556"
						>Laci556</a
					>.
				</p>
				<p class="text-lg font-medium md:text-xl">
					You made it here? Thank you for checking out my website!
				</p>
			</div>
		</div>
	</div>
	<div class="h-10 w-full">
		<p class="text-center text-sm md:text-base">
			Made with Svelte + Tailwind | <span class="inline-block">&copy; 2022 László Bucsai</span>
		</p>
	</div>
</HomeSection>
