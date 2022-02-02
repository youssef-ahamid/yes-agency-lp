<script>
	export let services = [];
	import Button from '$lib/components/base/Button.svelte';
	import Service from '$lib/components/ui/Service.svelte';
</script>

{#each services as service, i}
	<Service flip={(i + 1) % 2 == 0}>
		<span slot="title">{service.title}</span>
		<span slot="text">{service.text}</span>
		<span slot="number">{i + 1}</span>
		<img src={service.img} slot="image" alt={service.title} class="block w-full" />
		<Button {...service.action} slot="button" />
	</Service>
{/each}}
