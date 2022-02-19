<script>
	import TextInput from '$lib/components/base/textInput.svelte';
	export let questions, title, subtitle;
</script>

<h4>{title}</h4>
<h6 class="max-w-3xl pr-2 pt-4 font-thin">{subtitle}</h6>
<div class="flex flex-wrap">
	{#each questions as question}
		<div class="mt-4 w-full md:w-1/2">
			<TextInput {...question} bind:value={question.value} />
		</div>
	{/each}
</div>
