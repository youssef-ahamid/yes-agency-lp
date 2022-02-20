<script>
	export const id = 'home';

	import { onMount } from 'svelte';

	import Navbar from '$lib/components/ui/Navbar.svelte';
	import Button from '$lib/components/base/Button.svelte';
	import Hero from '$lib/components/ui/Hero.svelte';

	export let title, subtitle, words, titleAfter;
	export let speed = 1;
	export let actions = [];
	export let images = [];

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

<section {id} on:fireModal class="relative">
	<Navbar color={words[index].color} />
	<Hero hideScroller>
		<div class="max-w-3xl py-2 px-2">
			<h1 class="my-4 md:my-6">
				{title}
				<br />
				{#if textVisible}
					<span
						class={`underline underline-offset-4 decoration-${words[index].color}`}
						transition:typewriter={{ speed: speed }}
						on:introend={backspace}
						on:outroend={next}>{words[index].text}</span
					>
				{/if}
				<br />
				{titleAfter}
			</h1>
			<p>{subtitle}</p>
			<div class="my-8 flex w-full" on:fireModal>
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
	<div class="absolute inset-x-0 bottom-8 flex h-24 w-full flex-col justify-center md:h-40">
		<h6 class="mx-auto py-3 text-center text-opacity-50 md:pb-6">Trusted By</h6>
		<div class="flex flex-wrap items-center justify-center">
			{#each images as src}
				<img
					{src}
					alt=""
					class="m-2 h-6 w-auto opacity-50 brightness-[5000%] md:mx-6 md:my-4 md:h-12 lg:mx-12"
				/>
			{/each}
		</div>
	</div>
</section>
