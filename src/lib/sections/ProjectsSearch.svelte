<script>
	export const id = 'project-search';

	import { fade, fly } from 'svelte/transition';
	import { flip } from 'svelte/animate';

	import FilterTag from '$lib/components/base/FilterTag.svelte';
	import WorkCard from '$lib/components/ui/WorkCard.svelte';

	export let projects = [];
	export let filters = [{ text: 'All', color: 'primary' }];
	export let max_entries = 12;
	export let title = 'Browse Projects';

	let appliedFilter = 'all';
	$: appliedFilter = appliedFilter.toLowerCase();

	function filterProjects(filter) {
		if (filter == 'all') {
			return projects.slice(0, max_entries);
		} else {
			let filtered = [];
			for (let i = 0; i < projects.length; i++) {
				let tagsText = projects[i].tags.map((tag) => (tag = tag.text.toLowerCase()));
				if (tagsText.includes(filter)) filtered.push(projects[i]);
			}
			return filtered.slice(0, max_entries);
		}
	}
	$: filteredProjects = filterProjects(appliedFilter);
</script>

<section class="mx-auto mb-12 flex max-w-7xl flex-wrap justify-center px-4 py-8" {id}>
	<h1 class="mb-6 w-full text-left md:mb-12 mx-auto">{title}</h1>
	<div
		class="flex w-full snap-x snap-mandatory items-center overflow-x-scroll md:flex-wrap md:justify-around"
	>
		{#each filters as tag}
			<div class="min-w-fit snap-start snap-always scroll-ml-4">
				<FilterTag
					{...tag}
					on:select={(e) => (appliedFilter = e.detail)}
					active={appliedFilter == tag.text}
				/>
			</div>
		{/each}
	</div>
	<div
		class="my-8 flex min-h-[24rem] w-full snap-x snap-mandatory items-center overflow-x-scroll md:flex-wrap md:justify-center"
	>
		{#each filteredProjects as project, i (project)}
			<div
				animate:flip={{ duration: 500, delay: 250 }}
				in:fly={{ y: 50, duration: 400, delay: 450 }}
				out:fly={{ y: -20, duration: 200 }}
				class="snap-center snap-always"
			>
				<WorkCard tags={project.tags} max_tags={2} slug={project.slug}>
					<img
						src={project.client.logo}
						slot="logo"
						alt={project.client.name}
						class="max-h-[45px]"
					/>
					<span slot="title">{project.title}</span>
					<span slot="dates">{project.dates}</span>
				</WorkCard>
			</div>
		{/each}
	</div>
</section>
