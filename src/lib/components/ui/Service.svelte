<script>
	export let flip;
</script>

<div
	class="my-32 mx-auto flex w-full max-w-7xl flex-wrap p-2 md:my-40 md:flex-nowrap"
	class:justify-end={flip}
	class:md:justify-start={flip}
>
	<h4 class="mx-6 text-7xl font-bold text-opacity-50 md:mx-4 md:text-8xl">
		<slot name="number" />
	</h4>
	<div
		class="flex w-full flex-wrap justify-between"
		class:flex-col-reverse={flip}
		class:md:flex-row-reverse={flip}
	>
		<div class="mx-auto min-w-[250px] max-w-2xl px-6 md:mx-6">
			<h2 class="my-4 capitalize md:my-6"><slot name="title" /></h2>
			<p class="max-w-[48ch]"><slot name="text" /></p>
			<div
				class="mt-8 mb-4 -ml-6 flex w-full max-w-2xl md:my-10 md:-ml-10"
				class:justify-end={flip}
				class:ml-0={flip}
				class:-mr-6={flip}
				class:md:-mr-10={flip}
			>
				<slot name="button" />
			</div>
		</div>
		<div class="mx-auto my-5 h-80 w-80 overflow-clip rounded-3xl md:mx-6 md:h-96 md:w-96">
			<slot name="image" />
		</div>
	</div>
</div>
