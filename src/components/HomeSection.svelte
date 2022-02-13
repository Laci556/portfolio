<script>
	import inView from '../actions/inView';

	import { bg } from '../store';

	let classes = '';
	export { classes as class };
	// export let index;
	export let background;
	export let text;

	let visible = false;
	let firstVisible = false;

	$: {
		if (visible) {
			$bg = background;
		}
	}
</script>

<div
	use:inView
	on:enter={() => {
		visible = true;
		firstVisible = true;
	}}
	on:exit={() => {
		visible = false;
	}}
	class="container mx-auto h-screen max-w-screen-lg select-none snap-start px-8 lg:px-2 {classes} {text &&
		`text-[${text}]`}"
>
	<slot {visible} {firstVisible} />
</div>
