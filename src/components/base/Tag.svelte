<script>
	export let blue, purple, orange, green, primary, secondary, tertiary, disabled;
</script>

<span
	class="py-1 px-3 rounded-full max-w-fit mr-1 my-1 md:mr-2 body-sm uppercase font-bold inline-block transition duration-300 ease-out border-2 border-transparent hover:bg-opacity-0 hover:shadow hover:shadow-current"
	class:bg-primary={primary}
	class:bg-secondary={secondary}
	class:bg-tertiary={tertiary}
	class:bg-blue={blue}
	class:bg-orange={orange}
	class:bg-green={green}
	class:bg-purple={purple}
	class:bg-gray-400={disabled}
	class:hover:border-primary={primary}
	class:hover:border-secondary={secondary}
	class:hover:border-tertiary={tertiary}
	class:hover:border-blue={blue}
	class:hover:border-orange={orange}
	class:hover:border-green={green}
	class:hover:border-purple={purple}
	class:hover:border-gray-400={disabled}
	class:hover:text-primary={primary}
	class:hover:text-secondary={secondary}
	class:hover:text-tertiary={tertiary}
	class:hover:text-blue={blue}
	class:hover:text-orange={orange}
	class:hover:text-green={green}
	class:hover:text-purple={purple}
	class:hover:text-gray-400={disabled}
>
	<slot></slot>
</span>
