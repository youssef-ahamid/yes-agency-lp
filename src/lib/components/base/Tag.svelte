<script>
	export let color;
	export let text = false;
	export let inverted = false;

	$: invertColor = color == 'primary' ? 'secondary' : 'primary';
</script>

<span
	class="body-sm hover:shadow-color/20 my-1 mr-1 inline-block max-w-fit rounded-full py-1 px-3 font-bold uppercase ring-2 transition duration-300 ease-out hover:shadow md:mb-3 md:mr-3 md:px-5 {!inverted
		? `ring-transparent hover:bg-transparent bg-${color} hover:ring-${color} hover:text-${color}`
		: `text-${color} bg-${invertColor} ring-${color} hover:text-${invertColor} hover:bg-${color} hover:ring-${invertColor}`}"
>
	{#if text}
		{text}
	{:else}
		<slot />
	{/if}
</span>
