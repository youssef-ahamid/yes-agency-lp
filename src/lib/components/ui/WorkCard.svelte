<svelte:options immutable={true} />

<script>
	import Button from '$lib/components/base/Button.svelte';
	import Tag from '$lib/components/base/Tag.svelte';

	export let tags = [];
	export let slug = '';
	export let max_tags = 5;
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
	class="relative mx-auto w-80 overflow-clip rounded-3xl {!!details
		? 'flex flex-col flex-nowrap md:w-[80%] md:flex-row lg:min-w-[700px]'
		: 'inline-block p-5 md:w-96'} bg-{clr.bg} shadow hover:shadow-2xl hover:shadow-{clr.bg}/20 mx-2 my-4 cursor-crosshair transition duration-300 ease-out md:mx-4 md:my-8"
	on:mouseenter={() => (hover = true)}
	on:mouseleave={() => (hover = false)}
>
	{#if !details}
		<div
			class="max-h-[70px] min-h-[40px] w-full max-w-[80%] text-{clr.text} my-4 fill-current transition duration-300 ease-out"
			class:brightness-100={!hover}
			class:brightness-[10]={hover && !(clr.bg == 'tertiary' || clr.bg == 'primary')}
			class:brightness-0={hover && (clr.bg == 'tertiary' || clr.bg == 'primary')}
		>
			<slot name="logo" />
		</div>
	{/if}
	<div class="flex flex-col px-5 py-4">
		<h4
			class="text-{clr.text} capitalize transition duration-300 ease-out {!!details
				? 'order-2'
				: 'order-1'}"
		>
			<slot name="title" />
		</h4>
		<p
			class="body-sm text-opacity-75 text-{clr.text} capitalize transition duration-300 ease-out {!!details
				? 'order-3'
				: 'order-2'}"
		>
			<slot name="dates" />
		</p>
		<div class="my-2 {!!details ? 'order-1' : 'order-3'}">
			{#each tags as tag, i}
				{#if i == max_tags}
					<Tag color={hover ? clr.bg : 'blue-dark'} inverted={hover}>+{tags.length - max_tags}</Tag>
				{:else if i < max_tags}
					<Tag {...tag} color={hover ? clr.bg : tag.color} inverted={hover} />
				{/if}
			{/each}
		</div>
		<p class="body-sm order-4 max-w-[65ch] pr-3 text-{clr.text} whitespace-pre-line">
			<slot name="about" />
		</p>
	</div>
	<div
		class="relative flex w-full flex-col justify-end transition duration-300 ease-out md:max-w-[250px] {!!details
			? `mt-4 md:mt-0`
			: 'py-0'}"
	>
		<div
			class="absolute h-full w-full rounded-br-3xl rounded-bl-3xl bg-cover bg-center bg-no-repeat transition duration-500 ease-out md:rounded-tr-3xl md:rounded-bl-none"
			style={!!details
				? `background-image: linear-gradient(
    to bottom,
    #2423319a,
    #242331
  ),url(${details.img}); ${hover ? 'opacity: 25% !important' : 'opacity: 100 !important'}`
				: 'display: hidden;'}
		/>
		<div
			class="h-full w-full bg-gradient-to-b to-{clr.bg} justify-denter relative flex items-center"
		>
			{#if !!details}
				<div
					class="h-auto max-h-full w-full max-w-[90%] mx-auto p-4 text-{clr.text} fill-current transition duration-300 ease-out"
					class:brightness-100={!hover}
					class:brightness-[10]={hover && !(clr.bg == 'tertiary' || clr.bg == 'primary')}
					class:brightness-0={hover && (clr.bg == 'tertiary' || clr.bg == 'primary')}
				>
					<slot name="logo" />
				</div>
			{/if}
		</div>
	</div>
</div>

<div class="to-tertiary to-primary to-secondary to-secondary-light to-orange to-green to-purple" />
