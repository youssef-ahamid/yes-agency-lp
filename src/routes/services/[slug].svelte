<script>
	import Navbar from '$lib/components/ui/Navbar.svelte';
	import Service from '$lib/sections/heros/Service.svelte';
	import ServiceProjects from '$lib/sections/ServiceProjects.svelte';

	export let service = {
		name: 'branding',
		color: 'purple',
		action: {
			text: 'get branded',
			purple: true,
			underlined: true,
			to: '#connect'
		},
		description:
			"this is the best description for the best service we offer. maybe you'll be intigued by this, i am sure you'll like it though. have fun, enjoy, and don't forget to clean the floor after stepping on it with your dirty shoes bye.",
		main_image:
			'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/defocused-image-of-multi-colored-powder-paints-royalty-free-image-1567732625.jpg'
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
</script>

<Navbar color={service.color} />
<Service {service} />
<ServiceProjects {service} {projects} />
