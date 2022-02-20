import { writable } from 'svelte/store';

export const client = writable({
	services: [],
	project_info: [],
	contact_on: []
});
