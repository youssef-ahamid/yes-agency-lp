<script>
	import { fly } from 'svelte/transition';
	import { pluralize } from '$lib/helpers';

	import Card from '$lib/components/ui/WorkCard.svelte';
	import Button from '$lib/components/base/Button.svelte';

	export let projects = [];
	export let title = '';
</script>

<section id="projects">
	<h1 class="mx-auto w-full max-w-[90%] py-6 pl-4">{title}</h1>

	{#each projects as project, i}
		<div class="mx-auto flex w-full justify-center md:max-w-[90%]">
			<div
				in:fly={{ y: 50, x: -20, duration: 400 }}
				out:fly={{ y: -20, x: 20, duration: 200 }}
				class="flex {pluralize(i % 2, 'md:justify-start', 'md:justify-end')}"
			>
				<Card
					tags={project.tags}
					max_tags={2}
					slug={project.slug}
					details={{ img: project.images[0] }}
				>
					<img src={project.client.logo} slot="logo" alt={project.client.name} class="h-full max-h-[100px] md:max-h-full mx-auto block" />
					<span slot="title">{project.title}</span>
					<span slot="dates">{project.dates}</span>
					<span slot="about">{project.about}</span>
				</Card>
			</div>
		</div>
	{/each}

	<div class="mb-12 flex w-full justify-center py-6 md:mb-24">
		<Button tertiary round to="/projects">All Projects</Button>
	</div>
</section>
