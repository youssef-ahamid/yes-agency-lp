<script>
	import TextInput from '$lib/components/base/textInput.svelte';

	import { client } from '$lib/store/onboarding';
	export let questions, title, subtitle;
	$: $client.project_info = questions.map((q) => q.value);
</script>

<h4>{title}</h4>
<h6 class="max-w-3xl pr-2 pt-4 font-thin">{subtitle}</h6>
<div class="md:h-54 flex w-full flex-wrap">
	{#each questions as question}
		<div class="mx-[1.5%] mt-4 flex h-full w-full flex-col justify-between md:w-[47%]">
			<h6>{question.title}</h6>
			<TextInput {...question} bind:value={question.value} />
		</div>
	{/each}
</div>
