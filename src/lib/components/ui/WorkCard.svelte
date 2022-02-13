<svelte:options immutable={true} />

<script>
	import Button from '$lib/components/base/Button.svelte';
	import Tag from '$lib/components/base/Tag.svelte';

	export let tags = [];
	export let slug = '';
	export let max_tags = 3;
	export let details;
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
	class="relative w-80 rounded-3xl p-5 {details? 'flex flex-nowrap flex-col md:w-[70%] md:flex-row' : 'md:w-96 inline-block'} bg-{clr.bg} shadow hover:shadow-2xl hover:shadow-{clr.bg}/20 mx-2 my-4 cursor-crosshair transition duration-300 ease-out md:mx-4 md:my-8"
	on:mouseenter={() => (hover = true)}
	on:mouseleave={() => (hover = false)}
>
	<div
		class="max-h-[70px] min-h-[40px] w-full max-w-[70%] text-{clr.text} {details? 'absolute right-0 top-0' : 'my-4'} fill-current transition duration-300 ease-out"
		class:brightness-100={!hover}
		class:brightness-[10]={hover && !(clr.bg == 'tertiary' || clr.bg == 'primary')}
		class:brightness-0={hover && (clr.bg == 'tertiary' || clr.bg == 'primary')}
	>
		<slot name="logo" />
	</div>
	<div class="flex flex-col">
		<h4 class="text-{clr.text} capitalize transition duration-300 ease-out {details? 'order-2' : 'order-1'}"><slot name="title" /></h4>
		<p class="body-sm text-opacity-75 text-{clr.text} capitalize transition duration-300 ease-out {details? 'order-3' : 'order-2'}">
			<slot name="dates" />
		</p>
		<div class="my-1 {details? 'order-1' : 'order-3'}">
			{#each tags as tag, i}
				{#if i == max_tags}
					<Tag color={hover ? clr.bg : 'blue-dark'} inverted={hover}>+{tags.length - max_tags}</Tag>
				{:else if i < max_tags}
					<Tag {...tag} color={hover ? clr.bg : tag.color} inverted={hover} />
				{/if}
			{/each}
		</div>
		{#if details}
			<p class="body-sm pr-3 max-w-[65ch]">{details.text}</p>
		{/if}
	</div>
	<div class="flex w-full justify-end relative {details? 'py-4 bg-cover bg-center bg-norepeat rounded-br-3xl rounded-bl-3xl md:rounded-tr-3xl md:rounded-bl-none' : 'py-0'}" style="{details? 'background: url(${details.img})': ''}">
		{#if details}
			<div class="w-full h-full absolute bg-gradient-to-b to-{clr.bg}"></div>
		{/if}
		<Button
			ghost
			tertiary={!hover}
			secondary={hover && (clr.bg == 'tertiary' || clr.bg == 'primary')}
			primary={hover && !(clr.bg == 'tertiary' || clr.bg == 'primary')}
			to="/projects/{slug}">case study</Button
		>
	</div>
</div>
