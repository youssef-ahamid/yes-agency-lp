<script>
	export let checked, label;
	export let color = 'primary';
</script>

<div class="relative h-12 max-w-md">
	<label for="checkbox" class="relative">
		<div class="absolute left-1 top-2 z-10 h-3 w-3 md:h-4 md:w-4">
			<svg
				version="1.1"
				id="Capa_1"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				x="0px"
				y="0px"
				class="{checked
					? 'text-opacity-100'
					: 'text-opacity-0'} fill-current text-primary transition duration-300 ease-out"
				viewBox="0 0 45.701 45.7"
				style="enable-background:new 0 0 45.701 45.7;"
				xml:space="preserve"
			>
				<g>
					<g>
						<path
							d="M20.687,38.332c-2.072,2.072-5.434,2.072-7.505,0L1.554,26.704c-2.072-2.071-2.072-5.433,0-7.504
					c2.071-2.072,5.433-2.072,7.505,0l6.928,6.927c0.523,0.522,1.372,0.522,1.896,0L36.642,7.368c2.071-2.072,5.433-2.072,7.505,0
					c0.995,0.995,1.554,2.345,1.554,3.752c0,1.407-0.559,2.757-1.554,3.752L20.687,38.332z"
						/>
					</g>
				</g>
			</svg>
		</div>
	</label>

	<label class="group relative flex max-w-min cursor-pointer items-center pb-2">
		<input
			name="checkbox"
			type="checkbox"
			bind:checked
			class="peer h-5 w-5 appearance-none rounded-md border-2 border-primary border-opacity-50 bg-transparent outline-none transition duration-200 ease-out focus:border-opacity-80 group-hover:border-opacity-80 md:h-6 md:w-6 checked:bg-{color} checked:border-opacity-100 focus:ring-1 focus:ring-{color} checked:ring-{color} cursor-pointer"
		/>
		<h6
			class="whitespace-nowrap text-primary text-opacity-50 peer-checked:text-{color} ml-4 mr-1 transition duration-300 ease-out group-hover:text-opacity-80 peer-checked:text-opacity-100 peer-focus:text-opacity-80 capitalize"
		>
			{label}
		</h6>
		<div
			class="absolute top-full w-full origin-left scale-x-0 group-hover:scale-x-[20%] peer-checked:scale-x-100 bg-{color} h-px rounded-full transition duration-300 ease-out"
		/>
	</label>
</div>
