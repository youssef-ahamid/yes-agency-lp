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
			class="max-h-fit w-full max-w-6xl flex-1 overflow-hidden rounded-3xl bg-secondary-light p-12 text-primary md:rounded-[50px] md:p-20"
			id="modal"
			transition:fly={{ duration: 300, y: 50, delay: 200 }}
		>
			<slot />
		</div>
	</div>
{/if}

<style>
	#modal {
		filter: drop-shadow(0 25px 25px rgb(36 35 49 / 0.15));
	}
</style>
