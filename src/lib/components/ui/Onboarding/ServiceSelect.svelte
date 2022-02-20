<script>
	import { client } from '$lib/store/onboarding';
	import Checkbox from '$lib/components/base/Checkbox.svelte';
	export let options, title, subtitle;

	const add = (e) => $client.services.push(e.detail);
	const remove = (e) =>
		($client.services = $client.services.filter((service) => service != e.detail));
</script>

<h4>{title}</h4>
<h6 class="max-w-3xl pr-2 pt-4 font-thin">{subtitle}</h6>

<div class="flex flex-wrap">
	{#each options as option}
		<div class="mt-4 w-full md:w-1/3">
			<Checkbox
				label={option.name}
				color={option.color}
				bind:checked={option.checked}
				on:check={add}
				on:uncheck={remove}
			/>
		</div>
	{/each}
</div>
