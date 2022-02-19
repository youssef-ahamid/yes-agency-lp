export const pluralize = (i, singular = '', plural = 's') => {
	return i % 2 == 0 ? singular : plural;
};

export const post = async (url = '', data = {}) => {
	// Default options are marked with *
	const response = await fetch(url, {
		method: 'POST', // *GET, POST, PUT, DELETE, etc.
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data) // body data type must match "Content-Type" header
	});
	return response.json(); // parses JSON response into native JavaScript objects
};
