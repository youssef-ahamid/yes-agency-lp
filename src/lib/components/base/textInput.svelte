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
	export let title = '';

	const dispatch = createEventDispatcher();

	function submit() {
		dispatch('submit', value);
	}

	$: value = trim ? value.trim() : value; // remove whitespace
</script>

<div class="relative my-4 inline-block md:my-8" class:my-12={big} >
	{#if title.length > 0}
		<h4>{title}</h4>
	{/if}
	<div class="flex items-center justify-between">
		{#if textArea}
			<textarea
				bind:value
				{placeholder}
				class="peer mx-2 appearance-none bg-primary bg-opacity-5 focus:bg-opacity-25 font-slab font-bold text-primary text-opacity-75 placeholder-primary placeholder-opacity-50 outline-none focus:text-opacity-100 focus:placeholder-opacity-75 w-full"
			/>
		{:else if date}
			<input
				type="date"
				bind:value
				{placeholder}
				class="peer mx-2 appearance-none bg-transparent font-slab font-bold text-primary text-opacity-75 placeholder-primary placeholder-opacity-50 outline-none focus:text-opacity-100 focus:placeholder-opacity-75 w-16 md:w-24"
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
