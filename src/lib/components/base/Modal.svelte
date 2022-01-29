<script>
	import { fade, fly } from 'svelte/transition';
	export let active = false;
</script>

{#if active}
	<div
		class="fixed z-50 flex h-screen w-screen items-center justify-center bg-secondary bg-opacity-75"
		transition:fade={{ duration: 300 }}
	>
		<div
			class="w-full max-w-6xl rounded-3xl bg-secondary-light p-12 text-primary transition duration-300 ease-out md:rounded-[50px] md:p-20"
			style="filter: drop-shadow(0 25px 25px rgb(36 35 49 / 0.15))"
			transition:fly={{ duration: 300, y: 50, delay: 200 }}
		>
			<slot />
		</div>
	</div>
{/if}
