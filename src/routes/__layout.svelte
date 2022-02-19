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

<div
	class="bg-disabled bg-blue-dark decoration-blue decoration-purple decoration-orange decoration-green decoration-primary decoration-secondary decoration-tertiary ring-orange ring-green ring-purple ring-blue ring-tertiary ring-secondary ring-primary checked:bg-orange checked:bg-blue checked:bg-purple checked:bg-green checked:bg-tertiary checked:bg-secondary hover:border-blue-dark hover:bg-orange hover:bg-blue hover:bg-purple hover:bg-green hover:bg-tertiary hover:bg-secondary hover:text-orange hover:text-blue hover:text-blue-dark hover:text-purple hover:text-green hover:text-tertiary hover:text-secondary hover:text-disabled hover:shadow-primary/20 hover:shadow-orange/20 hover:shadow-blue/20 hover:shadow-tertiary/20 hover:shadow-secondary/20 hover:shadow-green/20 hover:shadow-purple/20 hover:ring-blue-dark hover:ring-disabled hover:ring-orange hover:ring-blue hover:ring-secondary hover:ring-primary hover:ring-blue hover:ring-tertiary hover:ring-secondary hover:ring-green hover:ring-purple focus:border-orange focus:border-blue focus:border-tertiary focus:border-secondary focus:border-green focus:border-purple focus:ring-orange focus:ring-green focus:ring-purple focus:ring-blue focus:ring-tertiary focus:ring-secondary focus:ring-primary peer-checked:text-orange peer-checked:text-green peer-checked:text-purple peer-checked:text-blue peer-checked:text-tertiary peer-checked:text-secondary peer-checked:text-primary"
/>
<div
	class="bg-blue-dark text-tertiary brightness-[10] checked:accent-orange checked:ring-orange focus:ring-orange peer-checked:text-orange"
/>
