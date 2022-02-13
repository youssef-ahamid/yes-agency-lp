<script>
	export const id = 'project-abstract';

	import Button from '$lib/components/base/Button.svelte';
	import Tag from '$lib/components/base/Tag.svelte';
	import Hero from '$lib/components/ui/Hero.svelte';
	import ImageCard from '$lib/components/ui/ImageCard.svelte';

	export let project;
</script>

<section {id}>
	<Hero class="md:pt-6">
		<div class="max-w-3xl relative">
			<div class="absolute bottom-full -ml-6 md:-ml-10 -mb-3">
				<Button underlined tertiary to="/projects">/projects/</Button>
			</div>
			<h1>{project.title}</h1>
			<div class="my-4">
				{#each project.tags as tag}
					<Tag {...tag} />
				{/each}
			</div>
			<p>{project.abstract}</p>
			<p class="my-12 capitalize text-opacity-50">{project.dates}</p>
		</div>
		<div>
			<ImageCard src={project.client.logo} />
		</div>
	</Hero>
</section>
