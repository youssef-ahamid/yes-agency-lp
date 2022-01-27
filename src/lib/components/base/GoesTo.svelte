<script>
	export let to = '';
	export let text = false;
</script>

<div class="relative inline-block">
	<a href={to} class="peer hover:text-primary">
		{#if !text}
			<slot />
		{:else}
			{text}
		{/if}
	</a>
	<div
		class="absolute top-[100%] h-px w-full origin-left scale-x-0 transform rounded-full bg-primary transition duration-200 ease-out peer-hover:scale-x-100"
	/>
</div>
