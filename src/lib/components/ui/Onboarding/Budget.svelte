<script>
	import Checkbox from '$lib/components/base/Checkbox.svelte';
	import RangeSlider from '$lib/components/base/RangeSlider.svelte';

	export let title, subtitle, min, max;
	export let step = Math.floor((max - min) / 100);
	export let def = min;
	export let budget = def;
	export let notSure = false;
</script>

<h4>{title}</h4>
<h6 class="max-w-3xl py-4 pr-2 font-thin">{subtitle}</h6>

<div class="w-52 md:w-full">
	<RangeSlider {min} {max} {step} bind:value={budget} beyond money />
</div>
<Checkbox label="I'm not 100% sure" bind:checked={notSure} />
