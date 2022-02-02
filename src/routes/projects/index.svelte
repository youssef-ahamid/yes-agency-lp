<script>
	import Hero from '$lib/sections/heros/Work.svelte';
	import ProjectsSearch from '$lib/sections/ProjectsSearch.svelte';
	let data = {
		title: 'Lorem ipsum dolor projects',
		subtitle:
			'Not a lot of text to read but no worries you got this. This was designed to be beautiful, nothing more, nothing less... It features a very large x height, slightly condensed letterforms, a mild diagonal stress, sturdy serifs and open forms. ',
		main_image:
			'https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
		action: {
			tertiary: true,
			underlined: true,
			to: '#connect',
			text: 'start a project'
		}
	};
	let projects = [
		{
			tags: [
				{ text: 'branding', color: 'purple' },
				{ text: 'ui/ux', color: 'orange' }
			],
			max_tags: 2,
			slug: 'armageddon',
			client: {
				logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Aramex_logo.svg',
				slug: 'aramex',
				name: 'unknown'
			},
			title: 'Hamoo',
			dates: 'may 16 - july 12'
		},
		{
			tags: [{ text: 'ui/ux', color: 'orange' }],
			max_tags: 2,
			slug: 'armageddon',
			client: {
				logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Aramex_logo.svg',
				slug: 'aramex',
				name: 'unknown'
			},
			title: 'no branding here',
			dates: 'may 16 - july 12'
		},
		{
			tags: [{ text: 'dev', color: 'green' }],
			max_tags: 2,
			slug: 'armageddon',
			client: {
				logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Aramex_logo.svg',
				slug: 'aramex',
				name: 'unknown'
			},
			title: 'only dev',
			dates: 'may 16 - july 12'
		}
	];
	let filters = [
		{
			text: 'all',
			id: 'all',
			color: 'primary'
		},
		{
			text: 'branding',
			id: 'branding',
			color: 'purple'
		},
		{
			text: 'ui/ux',
			id: 'ui/ux',
			color: 'orange'
		},
		{
			text: 'dev',
			id: 'dev',
			color: 'green'
		},
		{
			text: 'social media',
			id: 'social',
			color: 'blue'
		}
	];
</script>

<Hero {...data} />
<ProjectsSearch {projects} {filters} />
