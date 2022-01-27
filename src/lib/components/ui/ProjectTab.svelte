<script>
	export let slug;
</script>

<div class="flex w-full max-w-xl flex-col-reverse items-start justify-between md:flex-row">
	<div>
		<a href={`/projects/${slug}`}>
			<h4 class="transition duration-300 ease-out hover:text-tertiary"><slot name="title" /></h4>
		</a>
		<p><slot name="subtitle" /></p>
	</div>
	<div class="w-48 md:w-64">
		<slot name="tags" />
	</div>
</div>
