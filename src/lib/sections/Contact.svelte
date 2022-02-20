<script>
	import { client } from '$lib/store/onboarding';
	import { post } from '../../routes/api/client';
	import Stepper from '$lib/components/ui/Stepper.svelte';
	import TextInput from '$lib/components/base/textInput.svelte';
	import Button from '$lib/components/base/Button.svelte';

	export let title = '';
	export let text = '';
	export let action = { text: 'start', primary: true, round: true };
	export let onboarding = {};
	let value = '';
	let open = false;

	async function submit() {
		await post($client);
		console.log('finish post');
	}
</script>

<section class="mx-auto max-w-[90%] scroll-mt-20 px-4 py-8 pt-20" id="connect">
	<h1 class="my-7 md:my-12">{title}</h1>
	<p class="max-w-2xl">{text}</p>
	<div class="my-6 flex w-full justify-center md:justify-start">
		<Button
			{...action}
			on:click={() => {
				open = true;
			}}
		/>
	</div>
</section>
<Stepper bind:open steps={onboarding.steps} success={onboarding.success} action={submit} />
