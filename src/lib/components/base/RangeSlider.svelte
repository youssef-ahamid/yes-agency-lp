<script>
	import monetize from '$lib/actions/monetize';

	export let min, max, value;
	export let def = min;
	export let beyond = false;
	export let step = 10000;
	export let money = false;

	value = def;
	$: roundedValue = Math.ceil(value / step) * step;
</script>

<div class="relative mx-4 my-5 w-80 max-w-lg md:w-96 lg:w-full">
	<div class="my-5 flex">
		{#key value}
			{#if money}
				<h4 use:monetize={['truncate']}>{roundedValue}</h4>
			{:else}
				<h4>{roundedValue}</h4>
			{/if}
			{#if beyond && value == max}
				<h4>+</h4>
			{/if}
		{/key}
	</div>
	<div
		class="absolute z-0 h-3 w-full origin-left transform rounded-full bg-primary"
		style="clip-path: inset(10% {(1 - (value - min) / (max - min)) * 100}% 0px 0px);"
	/>
	<input
		type="range"
		bind:value
		{min}
		{max}
		{step}
		class="absolute z-20 h-3 w-full appearance-none rounded-full bg-primary bg-opacity-25 transition duration-300 ease-out focus:ring-1 focus:ring-primary focus:ring-opacity-50"
	/>
	<div class="my-12 flex w-full justify-between">
		{#if money}
			<h6 class="font-thin" use:monetize={['truncate']}>{min}</h6>
			<h6 class="font-thin" use:monetize={['truncate']}>{max}</h6>
		{:else}
			<h6 class="font-thin">{min}</h6>
			<h6 class="font-thin">{max}</h6>
		{/if}
	</div>
</div>

<style>
	input[type='range']::-webkit-slider-thumb {
		-webkit-appearance: none;
	}
	input[type='range']:focus {
		outline: none;
	}

	input[type='range']::-ms-track {
		width: 100%;
		cursor: pointer;
		/* Hides the slider so custom styles can be added */
		background: transparent;
		border-color: transparent;
		color: transparent;
	}
	/* Special styling for WebKit/Blink */
	input[type='range']::-webkit-slider-thumb {
		-webkit-appearance: none;
		width: 36px;
		z-index: 50;
		height: 36px;
		border-radius: 999px;
		background: rgb(237 247 246);
		cursor: pointer;
		margin-top: -4px; /* we need to specify a margin in Chrome, but in Firefox and IE it is automatic */
	}

	/* All the same stuff for Firefox */
	input[type='range']::-moz-range-thumb {
		z-index: 50;
		height: 36px;
		width: 36px;
		border-radius: 999px;
		background: rgb(237 247 246);
		cursor: pointer;
	}

	/* All the same stuff for IE */
	input[type='range']::-ms-thumb {
		z-index: 50;
		height: 36px;
		width: 36px;
		border-radius: 999px;
		background: rgb(237 247 246);
		cursor: pointer;
	}
</style>
