<script>
	import { scrollRef } from 'svelte-scrolling';
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

<section class="mx-auto mb-12 flex max-w-7xl flex-wrap justify-center px-4 py-8" use:scrollRef={id}>
	<h1 class="mb-12 w-full text-left md:mb-24">{title}</h1>
	<div class="flex w-full flex-wrap justify-around">
		{#each filters as tag}
			<FilterTag
				{...tag}
				on:select={(e) => (appliedFilter = e.detail)}
				active={appliedFilter == tag.text}
			/>
		{/each}
	</div>
	<div class="my-8 flex w-full flex-wrap justify-center">
		{#each filteredProjects as project, i (project)}
			<div
				animate:flip={{ duration: 500, delay: 100 }}
				in:fly={{ y: 50, duration: 500, delay: 300 }}
				out:fade={{ duration: 200 }}
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
