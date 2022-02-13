<script>
	export const id = 'service-abstract';

	import Button from '$lib/components/base/Button.svelte';
	import Hero from '$lib/components/ui/Hero.svelte';
	import ImageCard from '$lib/components/ui/ImageCard.svelte';

	export let service;
</script>

<section {id}>
	<Hero>
		<div class="max-w-3xl p-4 relative pt-16">
			<div class="absolute bottom-full -ml-6 md:-ml-10 -mb-3">
				<Button {...service.action} linkWithin={false} underlined text="" to="/services"
					>/services/</Button
				>
			</div>
			<h1 class={`mb-4 capitalize md:mb-6 text-${service.color}`}>{service.name}</h1>
			<p>{service.description}</p>
		</div>
		<div>
			<ImageCard src={service.main_image} action={service.action} preset={service.color} />
		</div>
	</Hero>
</section>
