<script>
	export let text,
        to,
		round,
		ghost,
		underlined,
		blue,
		purple,
		orange,
		green,
		primary,
		secondary,
		tertiary,
		icon;
</script>

<a href={to}>
    <button
        class="py-3 md:py-4 px-8 md:px-10 accent-primary rounded-full flex flex-wrap items-center group transition duration-300 ease-out focus:ring-4 focus:ring-offset-4 focus:ring-current"
        class:hover:shadow-md={round}
        class:hover:bg-primary={round}
        class:bg-primary={round && primary}
        class:bg-secondary={round && secondary}
        class:bg-tertiary={round && tertiary}
        class:bg-blue={round && blue}
        class:bg-orange={round && orange}
        class:bg-green={round && green}
        class:bg-purple={round && purple}
        class:text-primary={primary}
        class:text-secondary={secondary}
        class:text-tertiary={tertiary}
        class:text-blue={blue}
        class:text-orange={orange}
        class:text-green={green}
        class:text-purple={purple}
    >
        <a
            href={to}
            class:text-secondary={(tertiary && round) || (primary && round) || (secondary && ghost)}
            class:text-tertiary={tertiary && ghost}
            class:text-blue={blue && ghost}
            class:text-orange={orange && ghost}
            class:text-green={green && ghost}
            class:text-purple={purple && ghost}
            class:group-hover:text-secondary={round}
            class="transition duration-300 ease-out"  
        >{text}</a>
        {#if icon}
            <img class="w-4 h-4 ml-3 md:w-6 md:h-6 md:ml-5" src={icon} alt="icon" />
        {/if}
        {#if underlined}
            <div
                class="h-1 rounded-full my-1 w-full transition duration-300 ease-out"
                class:bg-primary={primary}
                class:bg-secondary={secondary}
                class:bg-tertiary={tertiary}
                class:bg-blue={blue}
                class:bg-orange={orange}
                class:bg-green={green}
                class:bg-purple={purple}
            />
        {/if}
    </button>
</a>
