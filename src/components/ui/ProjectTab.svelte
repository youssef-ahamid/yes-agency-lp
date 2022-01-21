<script>
	export let slug;
</script>

<div class="flex justify-between items-start flex-col-reverse md:flex-row w-full max-w-xl">
	<div>
		<a href={`/projects/${slug}`}>
			<h4 class="hover:text-tertiary transition duration-300 ease-out"><slot name="title" /></h4>
		</a>
		<p><slot name="subtitle" /></p>
	</div>
	<div class="w-48 md:w-64">
		<slot name="tags" />
	</div>
</div>
