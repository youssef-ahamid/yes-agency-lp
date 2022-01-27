<script>
	import { onMount } from 'svelte';

	import Navbar from '$lib/components/ui/Navbar.svelte';
	import Button from '$lib/components/base/Button.svelte';
	import Hero from '$lib/components/ui/Hero.svelte';
	
	export let title, subtitle, words;
	export let speed = 1;
	export let actions = [];

	let index = 0;

	import { typewriter } from '$lib/juiciness';
	let textVisible = false;
	let tw;

	function backspace() {
		clearInterval(tw);
		tw = setInterval(() => {
			textVisible = false;
		}, 2500 / speed);
	}

	function next() {
		index = (index + 1) % words.length;
		clearInterval(tw);
		tw = setInterval(() => {
			textVisible = true;
		}, 300 / speed);
	}

	function setup() {
		tw = setInterval(() => {
			textVisible = true;
		}, 500 / speed);
	}

	onMount(() => setup());
</script>

<Navbar color={words[index].color} />
<Hero long>
	<div class="max-w-3xl py-2 px-2">
		<h1 class="my-4 md:my-6">
			{title}
			{#if textVisible}
				<span
					class={`underline underline-offset-4 decoration-${words[index].color}`}
					transition:typewriter
					on:introend={backspace}
					on:outroend={next}>{words[index].text}</span
				>
			{/if}
		</h1>
		<p>{subtitle}</p>
		<div class="my-8 flex w-full">
			{#each actions as action}
				<Button
					{...action}
					blue={words[index].color == 'blue'}
					purple={words[index].color == 'purple'}
					orange={words[index].color == 'orange'}
					green={words[index].color == 'green'}
					tertiary={words[index].color == 'tertiary'}
					secondary={words[index].color == 'secondary'}
					primary={words[index].color == 'primary'}
					/>
				
			{/each}
		</div>
	</div>
</Hero>
