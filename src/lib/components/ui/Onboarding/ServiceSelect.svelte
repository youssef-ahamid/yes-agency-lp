<script>
	import Checkbox from '$lib/components/base/Checkbox.svelte';
	export let options, title, subtitle;
    export let selected = [];
</script>

<h4>{title}</h4>
<h6 class="max-w-3xl pr-2 pt-4 font-thin">{subtitle}</h6>

<div class="flex flex-wrap">
	{#each options as option}
		<div class="mt-10 w-full md:w-1/3">
			<Checkbox {...option} bind:group={selected} />
		</div>
	{/each}
</div>