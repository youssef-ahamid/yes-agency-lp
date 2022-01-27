<script>
	import ServiceList from '$lib/components/ui/ServiceList.svelte';
	export let services;
</script>

<h1 class="my-14 text-center">What We Do</h1>
<ServiceList {services} />
