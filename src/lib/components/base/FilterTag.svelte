<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	export let active, color, id;

	function select() {
		dispatch('select', id);
	}
</script>

<button
	class="group my-2 mr-3 inline-block cursor-pointer rounded-full px-6 py-2 transition duration-300 ease-out focus:ring-4 focus:ring-current focus:ring-offset-1 md:mr-5 md:px-10 md:py-3"
	on:click={select}
	class:bg-secondary-light={!active}
	class:hover:bg-primary={color == 'primary'}
	class:hover:bg-secondary={color == 'secondary'}
	class:hover:bg-tertiary={color == 'tertiary'}
	class:hover:bg-blue={color == 'blue'}
	class:hover:bg-orange={color == 'orange'}
	class:hover:bg-green={color == 'green'}
	class:hover:bg-purple={color == 'purple'}
	class:focus:bg-primary={color == 'primary'}
	class:focus:bg-secondary={color == 'secondary'}
	class:focus:bg-tertiary={color == 'tertiary'}
	class:focus:bg-blue={color == 'blue'}
	class:focus:bg-orange={color == 'orange'}
	class:focus:bg-green={color == 'green'}
	class:focus:bg-purple={color == 'purple'}
	class:text-primary={color == 'primary'}
	class:text-secondary={color == 'secondary'}
	class:text-tertiary={color == 'tertiary'}
	class:text-blue={color == 'blue'}
	class:text-orange={color == 'orange'}
	class:text-green={color == 'green'}
	class:text-purple={color == 'purple'}
	class:bg-gray-400={color == 'disabled'}
	class:bg-primary={active && color == 'primary'}
	class:bg-secondary={active && color == 'secondary'}
	class:bg-tertiary={active && color == 'tertiary'}
	class:bg-blue={active && color == 'blue'}
	class:bg-orange={active && color == 'orange'}
	class:bg-green={active && color == 'green'}
	class:bg-purple={active && color == 'purple'}
>
	<h5
		class="transition duration-300 ease-out focus-visible:scale-x-125 group-hover:text-opacity-50"
		class:group-focus:text-opacity-50={!active}
		class:group-hover:text-secondary={color == 'primary'}
		class:group-focus:text-secondary={color == 'primary'}
		class:text-secondary={active && color == 'primary'}
	>
		<slot />
	</h5>
</button>
