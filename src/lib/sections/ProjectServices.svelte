<script>
	import ServiceList from '$lib/components/ui/ServiceList.svelte';
	export let services = [];
	export let title = '';
</script>

<h2 class="my-14 text-center mx-auto">{title}</h2>
<ServiceList {services} />
