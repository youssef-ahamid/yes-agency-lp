<script>
	import Button from '../base/Button.svelte';
	export let project;
</script>

<div class="w-full max-w-xl px-8 flex flex-wrap items-center justify-between flex-col pt-20 pb-28 my-6 relative rounded-3xl bg-cover bg-center z-0" style={`background-image: linear-gradient(to bottom, rgba(22, 22, 38, 0.4), rgba(22, 22, 38)), url(${project.img});`}>
	<div class="w-full">
		<img src={project.logo} alt="" class="w-full max-w-xs" />
		<div class="mt-14">
			<h6>About</h6>
			<p class="body-sm font-extralight max-w-md">{project.about}</p>
		</div>
		<div class="my-3 md:my-5 flex justify-between flex-wrap">
			{#each project.data as entry}
				<div class={entry.long ? 'w-full my-3 md:my-5' : 'w-1/2 my-3 md:my-5'}>
					<h6>{entry.title}</h6>
					<p class="body-sm font-extralight max-w-md">{entry.content}</p>
				</div>
			{/each}
		</div>
	</div>
	<div class="absolute right-2 bottom-2">
		<Button tertiary ghost to={`/projects/${project.slug}`}>view case study</Button>
	</div>
</div>
