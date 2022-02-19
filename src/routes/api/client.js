import { post } from '$lib/helpers';

export async function create(client) {
	const res = await post('https://yesagency.herokuapp.com/api/clients', { ...client });
	const data = await res.json();

	return {
		body: data
	};
}
