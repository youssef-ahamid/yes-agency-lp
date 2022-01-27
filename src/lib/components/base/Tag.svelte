<script>
	export let color;
</script>

<span
	class="body-sm my-1 mr-1 inline-block max-w-fit rounded-full border-2 border-transparent py-1 px-3 font-bold uppercase transition duration-300 ease-out hover:bg-opacity-0 hover:shadow hover:shadow-current md:mr-3 md:px-5"
	class:bg-primary={color == 'primary'}
	class:bg-secondary={color == 'secondary'}
	class:bg-tertiary={color == 'tertiary'}
	class:bg-blue={color == 'blue'}
	class:bg-orange={color == 'orange'}
	class:bg-green={color == 'green'}
	class:bg-purple={color == 'purple'}
	class:bg-gray-400={color == 'disabled'}
	class:hover:border-primary={color == 'primary'}
	class:hover:border-secondary={color == 'secondary'}
	class:hover:border-tertiary={color == 'tertiary'}
	class:hover:border-blue={color == 'blue'}
	class:hover:border-orange={color == 'orange'}
	class:hover:border-green={color == 'green'}
	class:hover:border-purple={color == 'purple'}
	class:hover:border-gray-400={color == 'disabled'}
	class:hover:text-primary={color == 'primary'}
	class:hover:text-secondary={color == 'secondary'}
	class:hover:text-tertiary={color == 'tertiary'}
	class:hover:text-blue={color == 'blue'}
	class:hover:text-orange={color == 'orange'}
	class:hover:text-green={color == 'green'}
	class:hover:text-purple={color == 'purple'}
	class:hover:text-gray-400={color == 'disabled'}
>
	<slot />
</span>
