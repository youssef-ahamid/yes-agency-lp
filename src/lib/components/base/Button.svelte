<script>
	import { scrollTo } from 'svelte-scrolling';

	export let to = '';
	export let linkWithin = false;
	export let round = false;
	export let ghost = false;
	export let underlined = false;
	export let blue = false;
	export let purple = false;
	export let orange = false;
	export let green = false;
	export let primary = false;
	export let secondary = false;
	export let tertiary = false;
	export let icon = false;
	export let text = false;
</script>

{#if to.length == 0}
	<button
		on:click|preventDefault
		class="group flex flex-wrap items-center rounded-full transition duration-300 ease-out hover:shadow-primary/20 focus:ring-2 focus:ring-current focus:ring-offset-2"
		class:hover:shadow-lg={round}
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
		<h6
			class:text-secondary={(tertiary && round) || (primary && round) || (secondary && ghost)}
			class:text-tertiary={tertiary && ghost}
			class:text-blue={blue && ghost}
			class:text-orange={orange && ghost}
			class:text-green={green && ghost}
			class:text-purple={purple && ghost}
			class:group-hover:text-primary={(underlined && primary) || ghost}
			class:group-hover:text-secondary={(underlined && secondary) || round}
			class:group-hover:text-tertiary={underlined && tertiary}
			class:group-hover:text-blue={underlined && blue}
			class:group-hover:text-orange={underlined && orange}
			class:group-hover:text-green={underlined && green}
			class:group-hover:text-purple={underlined && purple}
			class="focus-visble:outline-primary py-2 px-6 capitalize transition duration-300 ease-out focus-visible:scale-x-[110%] md:py-4 md:px-10"
		>
			{#if text}
				{text}
			{/if}<slot />
		</h6>
		{#if icon}
			<img class="ml-3 h-4 w-4 md:ml-5 md:h-6 md:w-6" src={icon} alt="icon" />
		{/if}
		{#if underlined || ghost}
			<div class="relative mx-auto h-2 w-3/5">
				{#if underlined}
					<div
						class="-mt-1 h-1 w-full scale-x-100 rounded-full transition duration-300 ease-out group-hover:scale-x-125"
						class:bg-primary={primary}
						class:bg-secondary={secondary}
						class:bg-tertiary={tertiary}
						class:bg-blue={blue}
						class:bg-orange={orange}
						class:bg-green={green}
						class:bg-purple={purple}
					/>
				{/if}

				<div
					class="absolute -top-1 h-1 w-full scale-x-0 rounded-full bg-primary shadow-lg shadow-primary transition duration-300 ease-out group-hover:scale-x-100"
					class:bg-secondary={secondary}
					class:bg-primary={!secondary}
				/>
			</div>
		{/if}
	</button>
{:else}
	<button
		class="group flex flex-wrap items-center rounded-full transition duration-300 ease-out hover:shadow-primary/20 focus:ring-2 focus:ring-current focus:ring-offset-2"
		class:hover:shadow-lg={round}
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
		{#if linkWithin}
			<a
				href={to}
				use:scrollTo={to}
				class:text-secondary={(tertiary && round) || (primary && round) || (secondary && ghost)}
				class:text-tertiary={tertiary && ghost}
				class:text-blue={blue && ghost}
				class:text-orange={orange && ghost}
				class:text-green={green && ghost}
				class:text-purple={purple && ghost}
				class:group-hover:text-primary={(underlined && primary) || ghost}
				class:group-hover:text-secondary={(underlined && secondary) || round}
				class:group-hover:text-tertiary={underlined && tertiary}
				class:group-hover:text-blue={underlined && blue}
				class:group-hover:text-orange={underlined && orange}
				class:group-hover:text-green={underlined && green}
				class:group-hover:text-purple={underlined && purple}
				class="focus-visble:outline-primary py-2 px-6 transition duration-300 ease-out focus-visible:scale-x-[110%] md:py-4 md:px-10"
			>
				{#if text}
					{text}
				{/if}<slot /></a
			>
		{:else}
			<a
				href={to}
				class:text-secondary={(tertiary && round) || (primary && round) || (secondary && ghost)}
				class:text-tertiary={tertiary && ghost}
				class:text-blue={blue && ghost}
				class:text-orange={orange && ghost}
				class:text-green={green && ghost}
				class:text-purple={purple && ghost}
				class:group-hover:text-primary={(underlined && primary) || ghost}
				class:group-hover:text-secondary={(underlined && secondary) ||
					round ||
					(ghost && secondary)}
				class:group-hover:text-tertiary={underlined && tertiary}
				class:group-hover:text-blue={underlined && blue}
				class:group-hover:text-orange={underlined && orange}
				class:group-hover:text-green={underlined && green}
				class:group-hover:text-purple={underlined && purple}
				class="focus-visble:outline-primary transition duration-300 ease-out focus-visible:scale-x-[110%] py-2 px-6 md:py-4 md:px-10"
			>
				{#if text}
					{text}
				{/if}<slot /></a
			>
		{/if}
		{#if icon}
			<img class="ml-3 h-4 w-4 md:ml-5 md:h-6 md:w-6" src={icon} alt="icon" />
		{/if}
		{#if underlined || ghost}
			<div class="relative mx-auto h-2 w-3/5">
				{#if underlined}
					<div
						class="-mt-1 h-1 w-full scale-x-100 rounded-full transition duration-300 ease-out group-hover:scale-x-125"
						class:bg-primary={primary}
						class:bg-secondary={secondary}
						class:bg-tertiary={tertiary}
						class:bg-blue={blue}
						class:bg-orange={orange}
						class:bg-green={green}
						class:bg-purple={purple}
					/>
				{/if}

				<div
					class="absolute -top-1 h-1 w-full scale-x-0 rounded-full bg-primary shadow-lg shadow-primary transition duration-300 ease-out group-hover:scale-x-100"
					class:bg-secondary={secondary}
					class:bg-primary={!secondary}
				/>
			</div>
		{/if}
	</button>
{/if}
