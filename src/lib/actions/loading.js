const loading = function (node) {
	function loaded() {
		if (node.complete) node.dispatchEvent(new CustomEvent('loaded'));
	}

	if (node.complete)
		// check if element had completed loading at function call
		node.dispatchEvent(new CustomEvent('loaded'));
	else node.addEventListener('load', loaded());

	return {
		destroy() {
			node.removeEventListener('load', loaded());
		}
	};
};

export default loading;
