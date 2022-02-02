<script>
	import { flip } from 'svelte/animate';
	import { fly, fade } from 'svelte/transition';

	import ProjectInfo from '$lib/components/ui/ProjectInfo.svelte';
	import ProjectTab from '$lib/components/ui/ProjectTab.svelte';

	import Tag from '$lib/components/base/Tag.svelte';
	import Button from '$lib/components/base/Button.svelte';

	export let projects, title;
	export let max_tags = 3;

	let active = projects[0];
	let buffer = 0;
	let scrollDelay = 1500;
	let windowWidth, scrollView;
	let complete = false;

	async function bufferize(t) {
		let MAX = 60000;
		if (t > MAX)
			throw new Error(
				`max buffer size is 1 minute.\nProvided: ${
					t / 1000
				} seconds.\nYou can edit the MAX attribute on bufferize() (not recommended)`
			);
		buffer++;
		await new Promise((resolve) => setTimeout(resolve, t)).then(() => {
			buffer = 0;
		});
	}

	function next() {
		if (active == projects[projects.length - 1]) complete = true;
		else if (complete) complete = false;
		else {
			active = projects[projects.indexOf(active) + 1];
			window.scrollTo(0, scrollView.offsetHeight);
		}

		bufferize(scrollDelay);
	}

	function back() {
		if (active == projects[0]) complete = true;
		else if (complete) complete = false;
		else {
			active = projects[projects.indexOf(active) - 1];
			window.scrollTo(0, scrollView.offsetHeight);
		}
		bufferize(scrollDelay);
	}

	function scroll(e) {
		if (!complete) e.preventDefault();
		if (buffer > 0) return;
		if (e.wheelDelta > 0 || e.detail < 0) back();
		else next();
	}

	$: mobile = windowWidth < 500;
</script>

<svelte:window bind:innerWidth={windowWidth} />
<section
	bind:this={scrollView}
	class="relative mx-auto flex min-h-screen w-full max-w-7xl snap-y snap-mandatory flex-col justify-center overflow-y-scroll"
>
	<div
		on:mousewheel|stopPropagation={scroll}
		on:scroll|stopPropagation={scroll}
		class="relative h-full w-full md:space-y-24"
	>
		<h1 class="mx-6">{title}</h1>
		{#each projects as project (project)}
			<div
				class="flex flex-col-reverse px-8 md:block"
				animate:flip={{ duration: 200 }}
				on:scroll
				on:click={() => (active = project)}
			>
				{#if project == active || !mobile}
					<div in:fly={{ y: 20, duration: 300, delay: 500 }} out:fade={{ duration: 100 }}>
						<ProjectTab slug={project.slug}>
							<span
								class="transition duration-300 ease-out"
								slot="title"
								class:text-tertiary={active == project && !mobile}>{project.title}</span
							>
							<span slot="dates">{project.dates}</span>
							<span slot="tags">
								{#each project.tags as tag, i}
									{#if i == max_tags}
										<Tag color={project == active || complete ? 'blue-dark' : 'disabled'}
											>+{project.tags.length - i}</Tag
										>
									{:else if i < max_tags}
										<Tag color={project == active || complete ? tag.color : 'disabled'}>
											{tag.text}
										</Tag>
									{/if}
								{/each}
							</span>
						</ProjectTab>
					</div>
				{/if}
				<div class="md:absolute md:right-5 md:top-1/2 md:-translate-y-1/2">
					{#if project == active}
						<div
							in:fly={{ y: -20, duration: 300, delay: 200 }}
							out:fade={{ duration: 150 }}
							class="my-8"
						>
							<ProjectInfo {project} />
						</div>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</section>

<div class="mb-20 flex w-full justify-center md:mb-40">
	<Button tertiary round to="/projects">All Projects</Button>
</div>
