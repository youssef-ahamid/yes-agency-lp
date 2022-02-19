<script>
	import TextInput from '$lib/components/base/textInput.svelte';
	import Checkbox from '$lib/components/base/Checkbox.svelte';
	export let questions, options, title, subtitle;
</script>

<h4>{title}</h4>
<h6 class="max-w-3xl pr-2 pt-4 font-thin">{subtitle}</h6>

<h4>How do we get in touch with you?</h4>
<div class="flex flex-wrap">
	{#each options as option}
		<Checkbox {...option} bind:checked={option.checked}/>
	{/each}
</div>
<div class="flex flex-wrap">
	{#each questions as question}
		<div class="mt-10 w-full md:w-1/2">
			<TextInput {...question} bind:value={question.value} />
		</div>
	{/each}
</div>
