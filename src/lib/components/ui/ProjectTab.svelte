<svelte:options immutable={true} />

<script>
	import Goes from '$lib/components/base/GoesTo.svelte';
	export let slug;
</script>

<div class="flex w-full max-w-2xl items-start justify-between">
	<div>
		<Goes to="/projects/{slug}">
			<h4 class="transition duration-300 ease-out hover:text-tertiary"><slot name="title" /></h4>
		</Goes>
		<p class="body-sm font-bold capitalize text-opacity-50"><slot name="dates" /></p>
	</div>
	<div class="w-48 md:w-72">
		<slot name="tags" />
	</div>
</div>
