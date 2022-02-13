<script>
	export let href = '';
	export let text;
	export let background;
	export let disabled = false;
</script>

<a
	href={href || null}
	class="bg-[{text}] px-2 py-1 text-sm font-semibold md:text-base text-[{background}] transition-colors duration-200 {disabled &&
		'opacity-80 select-none'} {!disabled && `hover:bg-transparent hover:text-[${text}]`}"
	><slot /> ↗</a
>
