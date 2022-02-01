<script context="module">
	export const load = async ({ url }) => ({
		props: {
			key: url.pathname
		}
	});
</script>

<script>
	import '$lib/styles/tailwind.css';
	import PageTransition from '$lib/components/wrappers/PageTransition.svelte';

	import { pageColor } from '$lib/store/META';
	export let key;

	let color;

	pageColor.subscribe((value) => {
		color = value;
	});
</script>

<PageTransition refresh={key} {color}>
	<slot />
</PageTransition>
