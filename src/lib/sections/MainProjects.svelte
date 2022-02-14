<script>
  import { fly } from "svelte/transition";
  import { pluralize } from "$lib/helpers";

  import Card from "$lib/components/ui/WorkCard.svelte";
  import Button from "$lib/components/base/Button.svelte";

  export let projects = [];
  export let title = "";
</script>

<h1 class="mx-auto max-w-[90%] w-full pl-4 py-6">{title}</h1>

{#each projects as project, i}
  <div
    class="w-full md:max-w-[90%] mx-auto flex justify-center"
  >
    <div
      in:fly={{ y: 50, x: -20, duration: 400 }}
      out:fly={{ y: -20, x: 20, duration: 200 }}
      class="flex {pluralize(
        i % 2,
        'md:justify-start',
        'md:justify-end'
      )}"
    >
      <Card
        tags={project.tags}
        max_tags={2}
        slug={project.slug}
        details={{ img: project.images[0] }}
      >
        <img
          src={project.client.logo}
          slot="logo"
          alt={project.client.name}
          class="max-h-[25px]"
        />
        <span slot="title">{project.title}</span>
        <span slot="dates">{project.dates}</span>
        <span slot="about">{project.about}</span>
      </Card>
    </div>
  </div>
{/each}

<div class="mb-12 py-6 flex w-full justify-center md:mb-24">
  <Button tertiary round to="/projects">All Projects</Button>
</div>
<div class="justify-start justify-end" />
