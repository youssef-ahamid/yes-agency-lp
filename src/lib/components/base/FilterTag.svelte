<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	export let active, color, text;

	function select() {
		dispatch('select', text);
	}
</script>

<button
	class="group my-2 mr-3 inline-block cursor-pointer rounded-full px-6 py-2 transition duration-300 ease-out focus:ring-4 focus:ring-current focus:ring-offset-1 md:mr-5 md:px-10 md:py-3 hover:bg-{color} text-{color} focus:bg-{color} {active? `bg-${color}`:'bg-secondary-light'}"
	on:click={select}
>
	<h5
		class="transition duration-300 ease-out focus-visible:scale-x-125 group-hover:text-opacity-50"
		class:group-focus:text-opacity-50={!active}
		class:group-hover:text-secondary={color == 'primary'}
		class:group-focus:text-secondary={color == 'primary'}
		class:text-secondary={active && color == 'primary'}
	>
		{text}
	</h5>
</button>
