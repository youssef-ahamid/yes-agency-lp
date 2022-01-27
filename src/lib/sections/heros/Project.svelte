<script>
	import { scrollRef } from 'svelte-scrolling';
	export const id = 'project-abstract';

	import Button from '$lib/components/base/Button.svelte';
	import Tag from '$lib/components/base/Tag.svelte';
	import Hero from '$lib/components/ui/Hero.svelte';
	import ImageCard from '$lib/components/ui/ImageCard.svelte';

	export let project;
</script>

<section use:scrollRef={id}>
	<Hero>
		<div class="max-w-3xl p-4">
			<div class="-ml-6 md:-ml-10">
				<Button underlined tertiary to="/projects">/projects/</Button>
			</div>
			<h1 class="mb-4 md:mb-6">{project.title}</h1>
			<div class="my-4">
				{#each project.tags as tag}
					<Tag {...tag} />
				{/each}
			</div>
			<p>{project.abstract}</p>
			<p class="my-12 text-opacity-50">{project.dates}</p>
		</div>
		<div>
			<ImageCard
				src={project.client.logo}
				action={{
					text: 'client profile',
					primary: true,
					underlined: true,
					to: `/clients/${project.client.slug}`
				}}
			/>
		</div>
	</Hero>
</section>
