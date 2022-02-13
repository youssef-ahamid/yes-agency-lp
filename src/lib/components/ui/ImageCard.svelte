<script>
	import Button from '$lib/components/base/Button.svelte';
	import { onMount } from 'svelte';

	import ColorThief from '../../../../node_modules/colorthief/dist/color-thief.mjs';
	const colorThief = new ColorThief();

	let colorRefresh;
	let RGB, image;

	let blur = false;
	let set = false;

	export let src, action;
	export let preset = false;

	function getColor() {
		RGB = colorThief.getColor(image);
		if (RGB) clearInterval(colorRefresh);
	}

	function setup() {
		colorRefresh = setInterval(() => {
			getColor();
		}, 1000);
	}

	function toggleBlur() {
		if (set) {
			blur = false;
			set = false;
		} else {
			blur = true;
			set = true;
		}
	}

	onMount(() => setup());
</script>

<div
	class="relative z-20 my-12 mx-4 inline-block h-64 w-80 cursor-pointer md:my-28 md:mx-12 md:h-72 lg:mx-20"
	on:mouseenter={() => (set ? '' : (blur = true))}
	on:mouseleave={() => (set ? '' : (blur = false))}
>
	<div
		class="absolute z-0 h-full w-full transform rounded-3xl bg-gradient-to-tl {RGB & !blur? 'bg-opacity-100': 'bg-opacity-0'} from-primary bg-center bg-no-repeat transition duration-300 ease-out"
		class:-translate-x-12={RGB}
		class:to-primary={preset == 'primary'}
		class:to-secondary={preset == 'secondary'}
		class:to-tertiary={preset == 'tertiary'}
		class:to-blue={preset == 'blue'}
		class:to-purple={preset == 'purple'}
		class:to-orange={preset == 'orange'}
		class:to-green={preset == 'green'}
		style={preset
			? ''
			: RGB
			? `background-color: rgb(${RGB[0]},${RGB[1]},${RGB[2]}) !important;`
			: `background-image: url('${src}');`}
	/>
	<div class="absolute z-10 flex h-full w-full items-center justify-center">
		<img bind:this={image} {src} alt="" crossorigin="anonymous" class="hidden" />
		<div
			on:click={toggleBlur}
			class="absolute h-52 w-full rounded-3xl bg-center bg-no-repeat transition duration-500 ease-out md:h-64"
			class:blur={!RGB}
			class:opacity-0={blur}
			style={`background-image: url('${src}');`}
		/>
		<div
			on:click={toggleBlur}
			class="absolute z-10 h-52 w-full rounded-3xl bg-center bg-no-repeat transition duration-300 ease-out md:h-64"
			style={`background-image: url('${src}');`}
		/>
		{#if action}
			<div
				class="absolute top-[100%] left-0 right-0 flex h-16 w-full translate-x-4 transform items-center  justify-end transition duration-200 ease-out md:h-24 md:translate-x-12"
				class:translate-y-0={blur}
				class:-translate-y-20={!blur}
				class:opacity-0={!blur}
				class:opacity-100={blur}
			>
				<Button {...action} />
			</div>
		{/if}
	</div>
</div>
