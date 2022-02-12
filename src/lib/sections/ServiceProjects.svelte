<script>
	export const id = 'service-projects';

	import WorkCard from '$lib/components/ui/WorkCard.svelte';

	export let service = {
		name: 'branding',
		color: 'purple'
	};
	export let projects;
</script>

<section class="mx-auto flex max-w-7xl flex-wrap justify-center" {id}>
	<h2 class="my-6 w-full text-center">
		Past <span
			class="underline-offset-6 underline decoration-{service.color} decoration-6 capitalize"
			>{service.name}</span
		> Work
	</h2>

	{#each projects as project}
		<WorkCard slug={project.slug} color={service.color}>
			<img src={project.client.logo} slot="logo" alt={project.client.name} />
			<span slot="title">{project.title}</span>
			<span slot="dates">{project.dates}</span>
		</WorkCard>
	{/each}
</section>
