<script>
	import { scrollRef } from 'svelte-scrolling';
	export const id = 'projects-hero';

	import Hero from '$lib/components/ui/Hero.svelte';
	import ImageCard from '$lib/components/ui/ImageCard.svelte';

	export let title, subtitle, main_image, action;
</script>

<section use:scrollRef={id}>
	<Hero>
		<div class="max-w-3xl">
			<h1>{title}</h1>
			<p class="my-3 md:my-6">{subtitle}</p>
		</div>
		<div>
			<ImageCard src={main_image} {action} preset="tertiary" />
		</div>
	</Hero>
</section>
