<script>
	import ServiceList from '$lib/components/ui/ServiceList.svelte';
	export let services;
</script>

<h1 class="mt-14 text-center md:mt-36">What We Do</h1>
<ServiceList {services} />
