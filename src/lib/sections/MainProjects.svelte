<script>
  import { fly } from "svelte/transition";
  import { pluralize } from "$lib/helpers";
  
  import Card from "$lib/components/ui/WorkCard.svelte";
  import Button from "$lib/components/base/Button.svelte";

  export const projects = [];
  export const title = '';
</script>

<h1 class="mx-6">{title}</h1>
{#each projects as project, i}
  <div
    in:fly={{ y: 50, x: -20, duration: 400 }}
    out:fly={{ y: -20, x: 20, duration: 200 }}
    class="snap-center snap-always"
  >
    <Card tags={project.tags} max_tags={2} slug={project.slug} details={{ img: project.images[0] }}>
      <img
        src={project.client.logo}
        slot="logo"
        alt={project.client.name}
        class="max-h-[45px]"
      />
      <span slot="title">{project.title}</span>
      <span slot="dates">{project.dates}</span>
      <span slot="about">{project.about}</span>
    </Card>
  </div>
{/each}

<div class="mb-20 flex w-full justify-center md:mb-40">
	<Button tertiary round to="/projects">All Projects</Button>
</div>