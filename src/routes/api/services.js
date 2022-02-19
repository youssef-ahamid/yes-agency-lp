export async function get() {
	const res = await fetch('https://yesagency.herokuapp.com/api/services');
	const data = await res.json();
console.log(...data)
	return {
		body: data.data.map((_) => {
			return { ..._.attributes, id: _.id };
		})
	};
}
