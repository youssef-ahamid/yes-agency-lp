<script>
	import Button from '../base/Button.svelte';
	export let color;
	let showNav = false;
	function toggleNav() {
		showNav = !showNav;
	}
</script>

<div class="w-full p-6 md:p-12 max-w-7xl mx-auto flex justify-between items-center">
	<img src="images/logo.svg" alt="logo" class="w-32 md:w-44 h-auto" />
	<div class="hidden lg:flex">
		<Button ghost primary text="our work" to="/about" />
		<Button ghost primary text="what we do" to="/about" />
	</div>
	<div class="hidden lg:flex">
		<Button
			underlined
			primary={color == 'primary'}
			secondary={color == 'secondary'}
			tertiary={color == 'tertiary'}
			blue={color == 'blue'}
			orange={color == 'orange'}
			green={color == 'green'}
			purple={color == 'purple'}
			text="collaborate"
			to="#start"
		/>
		<Button
			round
			primary={color == 'primary'}
			secondary={color == 'secondary'}
			tertiary={color == 'tertiary'}
			blue={color == 'blue'}
			orange={color == 'orange'}
			green={color == 'green'}
			purple={color == 'purple'}
			text="CALL"
			to="tel:+201200525233"
		/>
	</div>
	<div class="w-20 lg:hidden z-50 flex flex-wrap justify-end" on:click={toggleNav}>
		<div
			class="w-16 h-1 rounded-full mb-1.5 transition duration-300 ease-out"
			class:bg-primary={color == 'primary'}
			class:bg-secondary={color == 'secondary'}
			class:bg-tertiary={color == 'tertiary'}
			class:bg-blue={color == 'blue'}
			class:bg-orange={color == 'orange'}
			class:bg-green={color == 'green'}
			class:bg-purple={color == 'purple'}
			class:transform={showNav}
			class:translate-y-4={showNav}
		/>
		<div
			class="w-10 h-1 bg-primary rounded-full my-1.5 transition duration-300 ease-out"
			class:transform={showNav}
			class:scale-x-150={showNav}
			class:-translate-x-2={showNav}
		/>
		<div
			class="w-16 h-1 bg-primary rounded-full my-1.5 transition duration-300 ease-out"
			class:transform={showNav}
			class:-translate-y-4={showNav}
		/>
	</div>
</div>
<div
	class="lg:hidden min-h-screen w-full fixed inset-0 bg-secondary transform transition duration-300 ease-out bg-opacity-0"
	class:bg-opacity-50={showNav}
>
	<div
		class="lg:hidden min-h-screen py-4 bg-secondary w-64 transform transition duration-500 ease-out ring-primary"
		class:-translate-x-full={!showNav}
		class:translate-x-0={showNav}
		class:ring={showNav}
	>
		<img src="images/logo.svg" alt="logo" class="w-32 h-auto p-6" />
		<div class="my-20">
			<Button ghost primary text="our work" to="/about" />
			<Button ghost primary text="what we do" to="/about" />
		</div>
		<div class="absolute bottom-10 flex flex-wrap justify-center">
			<Button
				underlined
				primary={color == 'primary'}
				secondary={color == 'secondary'}
				tertiary={color == 'tertiary'}
				blue={color == 'blue'}
				orange={color == 'orange'}
				green={color == 'green'}
				purple={color == 'purple'}
				text="collaborate"
				to="#start"
				class="my-4"
			/>
			<Button
				round
				primary={color == 'primary'}
				secondary={color == 'secondary'}
				tertiary={color == 'tertiary'}
				blue={color == 'blue'}
				orange={color == 'orange'}
				green={color == 'green'}
				purple={color == 'purple'}
				text="CALL"
				to="tel:+201200525233"
				class="my-4"
			/>
		</div>
	</div>
</div>
