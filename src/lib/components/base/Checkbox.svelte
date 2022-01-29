<script>
    export let checked, label;
    export let color = "primary";
</script>

<label class="flex items-center pb-2 max-w-min relative group cursor-pointer">
	<input type=checkbox bind:checked class="peer w-5 h-5 md:w-6 md:h-6 rounded-md appearance-none outline-none border-2 border-primary border-opacity-50 group-hover:border-opacity-80 focus:border-opacity-80 transition duration-200 ease-out bg-transparent checked:bg-{color} checked:border-opacity-100 focus:ring-1 focus:ring-{color} checked:ring-{color} cursor-pointer">
	<h6 class="text-primary text-opacity-50 peer-checked:text-{color} group-hover:text-opacity-80 peer-focus:text-opacity-80 peer-checked:text-opacity-100 transition duration-300 ease-out ml-4">{label}</h6>
    <div class="absolute top-full w-full scale-x-0 group-hover:scale-x-[20%] peer-checked:scale-x-100 origin-left bg-{color} h-px transition duration-300 ease-out rounded-full"></div>
</label>