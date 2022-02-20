<script>
	import clickOutside from '$lib/actions/clickOutside';
	import wheel from '$lib/actions/scrollable';
	import { fade, fly } from 'svelte/transition';
	export let active = false;
</script>

{#if active}
	<div
		use:wheel={false}
		class="fixed inset-0 z-[999] flex h-screen w-screen items-center justify-center bg-secondary bg-opacity-75"
		transition:fade={{ duration: 300 }}
	>
		<div
			class="max-h-fit w-full flex-1 overflow-hidden rounded-3xl bg-secondary-light p-12 text-primary md:max-w-[90%] md:rounded-[50px] md:p-20"
			id="modal"
			transition:fly={{ duration: 300, y: 50, delay: 200 }}
			use:clickOutside
			on:outclick={() => (active = false)}
		>
			<slot />
		</div>
	</div>
{/if}
