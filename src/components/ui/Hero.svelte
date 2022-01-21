<script>
	import ScrollDown from '../base/ScrollDown.svelte';
</script>

<div class="min-h-screen w-full flex justify-center items-center -mt-24">
	<div class="max-w-7xl w-full flex flex-wrap justify-start items-center px-8">
		<slot />
		<div class="absolute right-2 bottom-2">
			<ScrollDown />
		</div>
	</div>
</div>
