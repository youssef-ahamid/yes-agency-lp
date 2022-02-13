<script>
	import ScrollDown from '$lib/components/base/ScrollDown.svelte';
</script>

<div
	class="flex min-h-screen w-full items-center justify-center pt-12 md:-mt-28 md:pt-0 max-w-[90%] mx-auto"
>
	<div
		class="flex w-full max-w-7xl flex-wrap md:flex-nowrap items-center justify-start overflow-scroll px-2 md:justify-between"
	>
		<slot />
		<div class="absolute right-2 bottom-2">
			<ScrollDown />
		</div>
	</div>
</div>
