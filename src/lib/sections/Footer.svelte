<script>
	import Goes from '$lib/components/base/GoesTo.svelte';
	export let tel, email, address;
	export let copyright = '2021';
</script>

<div class="mt-20 w-full border-t-2 border-primary p-6 md:mt-80">
	<div class="mx-auto flex max-w-7xl flex-wrap items-center justify-between p-2 md:flex-nowrap">
		<Goes to="/">
			<img src="/images/logo.svg" alt="logo" class="h-auto w-28 py-4 md:w-40" />
		</Goes>
		<div class="flex w-full max-w-xl flex-wrap justify-between md:px-2">
			<div class="my-4 w-32 md:mx-2 md:w-44">
				<h6>Tel</h6>
				<Goes to="tel:{tel}">
					<p class="body-sm font-slab font-normal">{tel}</p>
				</Goes>
			</div>
			<div class="my-4 w-32 md:mx-2 md:w-44">
				<h6>Email</h6>
				<Goes to="mailto:{email}">
					<p class="body-sm font-slab font-normal lowercase">{email}</p>
				</Goes>
			</div>
			<div class="my-4 w-64 md:mx-2">
				<h6>Address</h6>
				<p class="body-sm whitespace-pre-wrap font-slab font-normal">
					{address}
				</p>
			</div>
		</div>
	</div>
	<div class="flex w-full justify-end">
		<div class="px-4">
			<p class="body-sm">copyright {copyright}</p>
			<p class="body-sm">
				Built with ❤️ by
				<Goes to="/services/dev">
					<span class="body-sm mx-1 font-slab font-bold lowercase">
						yes. <span class="font-slab uppercase text-green">Dev</span>
					</span>
				</Goes>
			</p>
		</div>
	</div>
</div>
