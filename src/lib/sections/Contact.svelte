<script>
	import { scrollRef } from 'svelte-scrolling';
	export const id = 'connect';
	
	import TextInput from '$lib/components/base/textInput.svelte';
		
	export let title = '';
	export let text = '';
	export let action = { text: 'start', primary: true, round: true, to: '/' };
	
	let value = '';
</script>

<section class="mx-auto max-w-7xl px-4 py-8" use:scrollRef={id}>
	<h1 class="my-7 md:my-12">{title}</h1>
	<p class="max-w-2xl">{text}</p>
	<TextInput bind:value placeholder="Work email" big trim {action} />
</section>
