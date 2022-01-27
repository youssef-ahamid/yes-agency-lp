<script>
	import Button from '$lib/components/base/Button.svelte';
	export let project;
</script>

<div
	class="relative z-0 my-6 flex w-full max-w-xl flex-col flex-wrap items-center justify-between rounded-3xl bg-cover bg-center px-8 pt-20 pb-28"
	style={`background-image: linear-gradient(to bottom, rgba(22, 22, 38, 0.4), rgba(22, 22, 38)), url(${project.img});`}
>
	<div class="w-full">
		<img src={project.logo} alt="" class="w-full max-w-xs" />
		<div class="mt-14">
			<h6>About</h6>
			<p class="body-sm max-w-md font-extralight">{project.about}</p>
		</div>
		<div class="my-3 flex flex-wrap justify-between md:my-5">
			{#each project.data as entry}
				<div class={entry.long ? 'my-3 w-full md:my-5' : 'my-3 w-1/2 md:my-5'}>
					<h6>{entry.title}</h6>
					<p class="body-sm max-w-md font-extralight">{entry.content}</p>
				</div>
			{/each}
		</div>
	</div>
	<div class="absolute right-2 bottom-2">
		<Button tertiary ghost to={`/projects/${project.slug}`}>view case study</Button>
	</div>
</div>
