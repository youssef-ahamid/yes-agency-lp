<script>
	import ScrollDown from '$lib/components/base/ScrollDown.svelte';
	export let long;
</script>

<div
	class="flex min-h-screen w-full items-center justify-center pt-12 lg:-mt-28"
	class:pt-28={long}
>
	<div
		class="flex w-full max-w-7xl flex-wrap md:flex-nowrap items-center justify-start overflow-scroll px-2 md:justify-between"
	>
		<slot />
		{#if !long}
			<div class="absolute right-2 bottom-2">
				<ScrollDown />
			</div>
		{/if}
	</div>
</div>
