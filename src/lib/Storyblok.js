// 1. Require the Storyblok client
import StoryblokClient from 'storyblok-js-client';
const spaceId = 147621;

// 2. Initialize the client with the oauth token
// from the my account area at https://app.storyblok.com
export const Storyblok = new StoryblokClient({
	oauthToken: 'rbK1W9lDGie71qp5wugytAtt-109909-o3rnYBBrZBPZyUmsb1hf'
});

export const create = (body = {}) => {
	Storyblok.post(`spaces/${spaceId}/stories`, { story: { ...body }, publish: 1 })
		.then((response) => {
			return response;
		})
		.catch((error) => {
			console.log(error);
		});
};

export const update = (id, body = {}) => {
	Storyblok.put(`spaces/${spaceId}/stories`, { story: { ...body } })
		.then((response) => {
			return response;
		})
		.catch((error) => {
			console.log(error);
		});
};

export const get = (id, body = {}) => {
	Storyblok.get(`spaces/${spaceId}/stories/${id}`, { ...body })
		.then((response) => {
			console.log(response);
			return response;
		})
		.catch((error) => {
			console.log(error);
		});
};

export const getAll = (body = {}) => {
	Storyblok.getAll(`spaces/${spaceId}/stories`, { ...body })
		.then((response) => {
			console.log(response);
			return response;
		})
		.catch((error) => {
			console.log(error);
		});
};

export const remove = (id) => {
	Storyblok.delete(`spaces/${spaceId}/stories/${id}`, null)
		.then((response) => {
			return response;
		})
		.catch((error) => {
			console.log(error);
		});
};
