<svelte:options immutable={true} />

<script>
	import Button from '$lib/components/base/Button.svelte';
	import Tag from '$lib/components/base/Tag.svelte';

	export let tags = [];
	export let slug = '';
	export let max_tags = 3;
	export let color =
		tags.length == 1 || (max_tags == 1 && tags.length > 1) ? tags[0].color : 'primary';

	let hover = false;

	$: textColor = color == 'primary' || color == 'tertiary' ? 'secondary' : 'primary';
	$: clr = {
		text: hover ? textColor : 'primary',
		bg: hover ? color : 'secondary-light'
	};
</script>

<div
	class="w-80 rounded-3xl p-5 md:w-96 bg-{clr.bg} shadow hover:shadow-2xl hover:shadow-{clr.bg}/20 mx-2 my-4 inline-block cursor-crosshair transition duration-300 ease-out md:mx-4 md:my-8"
	on:mouseenter={() => (hover = true)}
	on:mouseleave={() => (hover = false)}
>
	<div
		class="max-h-[70px] min-h-[40px] w-full max-w-[70%] text-{clr.text} my-4 fill-current transition duration-300 ease-out"
		class:brightness-100={!hover}
		class:brightness-[10]={hover && !(clr.bg == 'tertiary' || clr.bg == 'primary')}
		class:brightness-0={hover && (clr.bg == 'tertiary' || clr.bg == 'primary')}
	>
		<slot name="logo" />
	</div>
	<h4 class="text-{clr.text} capitalize transition duration-300 ease-out"><slot name="title" /></h4>
	<p class="body-sm text-opacity-75 text-{clr.text} capitalize transition duration-300 ease-out">
		<slot name="dates" />
	</p>
	<div class="my-1">
		{#each tags as tag, i}
			{#if i == max_tags}
				<Tag color={hover ? clr.bg : 'blue-dark'} inverted={hover}>+{tags.length - max_tags}</Tag>
			{:else if i < max_tags}
				<Tag {...tag} color={hover ? clr.bg : tag.color} inverted={hover} />
			{/if}
		{/each}
	</div>
	<div class="flex w-full justify-end">
		<Button
			ghost
			tertiary={!hover}
			secondary={hover && (clr.bg == 'tertiary' || clr.bg == 'primary')}
			primary={hover && !(clr.bg == 'tertiary' || clr.bg == 'primary')}
			to="projects/{slug}">case study</Button
		>
	</div>
</div>
