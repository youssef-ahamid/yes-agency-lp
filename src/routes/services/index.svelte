<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('/api/sections')
        const sections = await res.json();
        return { props: { sections }}
	}
</script>

<script>
	export let sections;
</script>

<h1>{ sections[0].title }</h1>
{@html sections[0].content }
