<script>
	import { createEventDispatcher } from 'svelte';

	import Button from './Button.svelte';

	export let value, placeholder;
	export let trim = false;
	export let big = false;
	export let action = false;
	export let context = '';
	export let textArea = false;
	export let date = false;

	const dispatch = createEventDispatcher();

	function submit() {
		dispatch('submit', value);
	}

	$: value = trim ? value.trim() : value; // remove whitespace
</script>

<div
	class="relative my-4 max-h-min md:my-8 {date ? 'w-40 md:w-64' : ''}"
	class:my-12={big}
	class:w-full={textArea}
>
	<div class="flex items-center justify-between">
		{#if textArea}
			<textarea
				bind:value
				{placeholder}
				class="peer mx-2 h-12 w-full appearance-none rounded-lg bg-primary bg-opacity-5 p-4 font-slab font-bold text-primary text-opacity-75 placeholder-primary placeholder-opacity-50 outline-none focus:bg-opacity-10 focus:text-opacity-100 focus:placeholder-opacity-75 md:h-20"
			/>
		{:else if date}
			<input
				type="date"
				bind:value
				{placeholder}
				class="peer appearance-none bg-transparent font-slab font-bold text-primary text-opacity-75 placeholder-primary placeholder-opacity-50 outline-none focus:text-opacity-100 focus:placeholder-opacity-75 w-40 md:w-54 h-12 md:h-20"
			/>
		{:else}
			<input
				type="text"
				bind:value
				{placeholder}
				class="peer mx-2 appearance-none bg-transparent font-slab font-bold text-primary text-opacity-75 placeholder-primary placeholder-opacity-50 outline-none focus:text-opacity-100 focus:placeholder-opacity-75"
				class:w-full={big}
				class:text-3xl={big}
				class:md:text-5xl={big}
				class:md:text-2xl={!big}
				class:w-44={!big}
				class:md:w-64={!big}
			/>
		{/if}
		{#if action}
			<Button {...action} on:click={submit} />
		{/if}
		<div
			class="absolute top-[100%] my-1 h-1 w-full origin-left scale-x-0 transform rounded-full bg-primary bg-opacity-75 transition duration-200 ease-out peer-focus:scale-x-100 md:my-2"
			class:mt-3={big}
		/>
		<div
			class="absolute top-[100%] my-1 h-1 w-full rounded-full bg-primary bg-opacity-50 md:my-2"
			class:mt-3={big}
		/>
		<p class="body-sm absolute top-[100%] mt-6 font-thin text-opacity-75">{context}</p>
	</div>
</div>

<div class="md:mx-32" />
