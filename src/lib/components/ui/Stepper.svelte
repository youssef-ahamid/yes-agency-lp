<svelte:options accessors />

<script>
	import { onMount } from 'svelte';
	import { fly, fade } from 'svelte/transition';
	import Modal from '$lib/components/base/Modal.svelte';
	import Button from '../base/Button.svelte';

	export let steps, success;
	export let action = () => {};
	export let currentStep = {};
	export let open = false;
	export let allowNav = true;

	function back() {
		currentStep = steps[currentStep.num - 2];
	}

	async function next() {
		if (currentStep.num < steps.length) currentStep = steps[currentStep.num];
		else {
			await action();
			currentStep = {
				num: steps.length + 1,
				...success
			};
		}
	}

	let nextAllowed = true;

	$: completed = currentStep.num >= steps.length + 1;
	$: progress = ((currentStep.num - 1) / (steps.length - 1)) * 100;
	$: progress = progress ? (progress < 100 ? progress : 100) : 0; // limit scaling to prevent going past 100% @ success
	onMount(() => (currentStep = steps[0]));
</script>

<Modal bind:active={open}>
	<div class="flex w-full items-start justify-start md:flex-col">
		<div class="relative my-12 mr-8 flex flex-col justify-between md:mr-0 md:w-full md:flex-row">
			{#each steps as step}
				<div
					class="group mt-12 mb-12 flex h-12 w-12 rotate-45 transform {allowNav
						? 'cursor-pointer'
						: ''} items-center justify-center transition duration-300 ease-out first-of-type:mt-0 last-of-type:mb-0 md:mt-0 md:mb-0 {step.num <
					currentStep.num
						? 'bg-primary'
						: 'bg-secondary'}"
					on:click={() => (allowNav ? (currentStep = step) : '')}
				>
					<h4
						class="-rotate-45 transform transition  duration-300 ease-out {currentStep == step
							? 'text-opacity-100'
							: ''} {step.num < currentStep.num
							? `text-secondary ${allowNav ? 'group-hover:text-opacity-75' : ''}`
							: `text-primary text-opacity-50 ${allowNav ? 'group-hover:text-opacity-100' : ''}`}"
					>
						{step.num}
					</h4>
				</div>
			{/each}
			<div
				class="absolute top-1/2 -z-50 hidden h-3 w-full -translate-y-1/2 transform bg-secondary md:block"
			/>
			<div
				class="absolute top-1/2 -z-40 hidden h-3 w-full origin-left -translate-y-1/2 transform bg-primary transition delay-300 duration-200 ease-out md:block"
				class:scale-x-25={progress == 25}
				class:scale-x-50={progress == 50}
				class:scale-x-75={progress == 75}
				class:scale-x-100={progress == 100}
				class:scale-x-0={progress == 0}
			/>

			<div class="absolute left-[20px] -z-50 h-3/4 w-2 bg-secondary md:hidden" />
			<div
				class="absolute left-[20px] -z-40 h-3/4 w-2 origin-top transform bg-primary transition duration-200 ease-out md:hidden"
				class:scale-y-25={progress == 25}
				class:scale-y-50={progress == 50}
				class:scale-y-75={progress == 75}
				class:scale-y-100={progress == 100}
				class:scale-y-0={progress == 0}
			/>
		</div>
		<div class="w-full">
			{#each steps as step}
				{#if step == currentStep}
					<div
						in:fly={{ x: 400, duration: 400, delay: 200 }}
						out:fly={{ x: -20, duration: 200 }}
						on:outrostart={() => (nextAllowed = false)}
						on:outroend={() => (nextAllowed = true)}
					>
						{#if nextAllowed}
							<svelte:component this={step.component} {...step.props} />
						{/if}
					</div>
				{/if}
			{/each}
			{#if completed}
				<div
					in:fly={{ x: 400, duration: 400, delay: 200 }}
					out:fly={{ x: -20, duration: 200 }}
					on:outrostart={() => (nextAllowed = false)}
					on:outroend={() => (nextAllowed = true)}
				>
					{#if nextAllowed}
						<svelte:component this={currentStep.component} {...currentStep.props} />
					{/if}
				</div>
			{/if}
		</div>
	</div>
	{#if !completed}
		<div
			transition:fade={{ duration: 200 }}
			class="flex w-full items-end {currentStep.num > 1 || !nextAllowed
				? 'justify-between'
				: 'justify-end'} mt-12"
		>
			{#if currentStep.num > 1}
				<div transition:fly={{ y: 20, duration: 300 }}>
					<Button ghost primary on:click={back}>back</Button>
				</div>
			{/if}
			{#if nextAllowed}
				<div transition:fly={{ y: 20, duration: 300 }}>
					<Button underlined primary on:click={next}
						>{currentStep.num == steps.length ? 'submit!' : 'next'}</Button
					>
				</div>
			{/if}
		</div>
	{/if}
</Modal>
