<script context="module">
	function computePageColor(url) {
		if (url.pathname.includes('ui-ux')) return 'orange';
		else if (url.pathname.includes('social')) return 'blue';
		else if (url.pathname.includes('branding')) return 'purple';
		else if (url.pathname.includes('dev')) return 'green';
		else return 'tertiary';
	}

	export const load = async ({ url }) => ({
		props: {
			key: url.pathname,
			color: computePageColor(url)
		}
	});
</script>

<script>
	import '$lib/styles/tailwind.css';
	import PageTransition from '$lib/components/wrappers/PageTransition.svelte';

	import { pageColor } from '$lib/store/META';
	export let key;

	export let color;
	$: pageColor.set(color);
</script>

<PageTransition refresh={key} {color}>
	<slot />
</PageTransition>
