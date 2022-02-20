<script>
	import { client } from '$lib/store/onboarding';
	import TextInput from '$lib/components/base/textInput.svelte';
	import Checkbox from '$lib/components/base/Checkbox.svelte';
	export let questions, options, title, subtitle;

	$: $client.personal_info = questions.map((q) => {
		return q.value;
	});
	$: $client.contact_on = options
		.filter((o) => o.checked)
		.map((_) => {
			return _.label;
		});
	$: console.log($client);
</script>

<h4>{title}</h4>
<h6 class="max-w-3xl pr-2 pt-4 font-thin">{subtitle}</h6>

<div class="flex flex-wrap justify-between">
	{#each questions as question}
		<div class="w-full md:mr-1 md:w-1/3">
			<TextInput {...question} bind:value={question.value} />
		</div>
	{/each}
</div>

<h6 class="pt-6 pb-4">How do we get in touch with you?</h6>
<div class="mt-2 flex flex-wrap">
	{#each options as option}
		<div class="w-full md:mt-4 md:w-1/2">
			<Checkbox {...option} bind:checked={option.checked} />
		</div>
	{/each}
</div>
