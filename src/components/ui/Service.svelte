<script>
	export let flip;
</script>

<div
	class="w-full max-w-7xl p-2 flex flex-wrap md:flex-nowrap my-32 md:my-40 mx-auto"
	class:justify-end={flip} class:md:justify-start={flip}
>
	<h4 class="font-bold text-opacity-50 text-7xl md:text-8xl mx-6 md:mx-4">
		<slot name="number" />
	</h4>
	<div class="w-full flex flex-wrap justify-between" class:flex-col-reverse={flip} class:md:flex-row-reverse={flip}>
		<div class="px-6 mx-auto min-w-[250px] max-w-2xl md:mx-6">
			<h2 class="my-4 md:my-6"><slot name="title" /></h2>
			<p class="max-w-[48ch]"><slot name="text" /></p>
			<div
				class="w-full max-w-2xl flex mt-8 mb-4 md:my-10 -ml-6 md:-ml-10"
				class:justify-end={flip}
				class:ml-0={flip}
			>
				<slot name="button" />
			</div>
		</div>
		<div class="w-80 h-80 md:w-96 md:h-96 overflow-clip rounded-3xl mx-auto md:mx-6 my-5">
			<slot name="image" />
		</div>
	</div>
</div>
