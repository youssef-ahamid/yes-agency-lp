<script>
	export let checked, label;
	export let color = 'primary';
</script>

<label class="group relative flex max-w-min cursor-pointer items-center pb-2">
	<input
		type="checkbox"
		bind:checked
		class="peer h-5 w-5 appearance-none rounded-md border-2 border-primary border-opacity-50 bg-transparent outline-none transition duration-200 ease-out focus:border-opacity-80 group-hover:border-opacity-80 md:h-6 md:w-6 checked:bg-{color} checked:border-opacity-100 focus:ring-1 focus:ring-{color} checked:ring-{color} cursor-pointer"
	/>
	<h6
		class="text-primary text-opacity-50 peer-checked:text-{color} ml-4 mr-1 transition duration-300 ease-out group-hover:text-opacity-80 peer-checked:text-opacity-100 peer-focus:text-opacity-80"
	>
		{label}
	</h6>
	<div
		class="absolute top-full w-full origin-left scale-x-0 group-hover:scale-x-[20%] peer-checked:scale-x-100 bg-{color} h-px rounded-full transition duration-300 ease-out"
	/>
</label>
