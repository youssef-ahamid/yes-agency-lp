import { create } from '$lib/Storyblok';
import { slugify } from '$lib/helpers';

export async function post(cl) {
	const client = {
		name: cl.personal_info[0],
		slug: slugify(cl.personal_info[0]),
		parent_id: 109920800,
		content: {
			component: 'lead',
			body: {
				phone: cl.personal_info[1],
				email: cl.personal_info[2],
				website: cl.personal_info[3],
				project_details: cl.project_info[0],
				complete_project_by: cl.project_info[1],
				services: cl.services
			}
		}
	};
	const res = await create(client);
	console.log(res);

	return {
		body: res
	};
}
