<script>
	import ScrollDown from '$lib/components/base/ScrollDown.svelte';
</script>

<div
	class="mx-auto flex min-h-screen w-full max-w-[90%] items-center justify-center pt-12 md:-mt-28 md:pt-0"
>
	<div
		class="flex w-full max-w-7xl flex-wrap items-center justify-start overflow-scroll px-2 md:flex-nowrap md:justify-between"
	>
		<slot />
		<div class="absolute right-2 bottom-2">
			<ScrollDown />
		</div>
	</div>
</div>
