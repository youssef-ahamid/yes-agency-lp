<script>
	import Project from '$lib/sections/heros/Project.svelte';
	import Services from '$lib/sections/ProjectServices.svelte';
	let project = {
		title: 'Project Title',
		tags: [
			{
				color: 'orange',
				text: 'ui/ux'
			},
			{
				color: 'purple',
				text: 'branding'
			},
			{
				color: 'blue',
				text: 'social media'
			},
			{
				color: 'green',
				text: 'app dev'
			}
		],
		abstract:
			'This was designed to be beautiful, nothing more, veild diagonal stress, sturdy serifs and open forms. large x height, slightly condensed letterforms, a mild diagonal stress, sturdy serifs and open forms.',
		dates: 'july 2021 - august 2021',
		client: {
			name: 'Aramex, Ltd.',
			logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Aramex_logo.svg',
			slug: 'aramex'
		},
		services: [
			{
				title: 'Full website Redesign',
				text: 'Hello my son this is the text hello my son this is the text hello my son this is the text hello my son this is the text hello my son this is the text hello my son this is the text hello my son this is the text',
				img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVCiB1709wStX0SE_dWhcLLIOYK0qcPNYUeJtewS9AHKJ12quLgGno9SZUEsHO5wi4m6k&usqp=CAU',
				action: {
					orange: true,
					text: 'lorem button',
					to: '/services/ui-ux',
					underlined: true
				}
			},
			{
				title: 'made them not suck',
				text: 'hello my son this is the text hello my son this is the text hello my son this is the text',
				img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVCiB1709wStX0SE_dWhcLLIOYK0qcPNYUeJtewS9AHKJ12quLgGno9SZUEsHO5wi4m6k&usqp=CAU',
				action: {
					purple: true,
					text: 'get branded!',
					to: '/services/branding',
					underlined: true
				}
			}
		]
	};
</script>

<Project {project} />
<Services services={project.services} title="The pain & gain" />
