<script>
	export let href = '';
	export let text;
	export let background;
	export let disabled = false;
</script>

<a
	href={href || null}
	target="_blank"
	class="bg-[{text}] px-2 py-1 text-sm font-semibold md:text-base text-[{background}] transition-colors duration-200 {disabled &&
		'opacity-80 select-none'} {!disabled && `hover:bg-transparent hover:text-[${text}]`}"
	><slot />
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="-mx-1 -mt-0.5 inline-block h-6 w-6 rotate-45"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M7 11l5-5m0 0l5 5m-5-5v12"
		/>
	</svg></a
>
