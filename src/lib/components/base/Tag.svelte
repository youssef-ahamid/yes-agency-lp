<script>
	export let color, text;
	export let inverted = false;

	$: invertColor = color == 'primary' ? 'secondary' : 'primary';
</script>

<span
	class="body-sm hover:shadow-color/20 my-1 mr-1 inline-block max-w-fit rounded-full border-2 py-1 px-3 font-bold uppercase transition duration-300 ease-out hover:shadow md:mr-3 md:px-5 {!inverted
		? `border-transparent hover:bg-opacity-0 bg-${color} hover:border-${color} hover:text-${color}`
		: `text-${invertColor} border-${invertColor} hover:text-${color} hover:bg-${invertColor} hover:border-${color}`}"
>
	{#if text}
		{text}
	{:else}
		<slot />
	{/if}
</span>
