<script context="module">
import { get } from "$lib/Storyblok";


	export async function load({ fetch, params }) {
		const res = await get(params.slug);
		
		return { props: { data: res } };
	}
</script>

<script>
	export let data;
</script>

<h6>name: {data.name}</h6>