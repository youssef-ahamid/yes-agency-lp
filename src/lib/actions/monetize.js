const monetize = function (node, [type, currency]) {
	const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;
	if (!valid) throw new Error(`This action only works on elements with a single text node child`);

	let text = node.textContent;

	function showMeTheMoney() {
		//e.g: text: 1000000
		let figures = text.length;
		let placeValue = Math.floor(figures / 3);
		let trailing = ((figures - placeValue) % 3) - 1;
		text = text.slice(0, placeValue + 1);

		if (type == 'truncate') {
			// text: 1m
			let letters = ['k', 'm', 'b', 't'];
			text += letters[trailing];
		} else if (type == 'delimit') {
			// text: 1,000,000
			let i = placeValue + 3;
			while (i < figures) {
				text += ',000';
				i += 3;
			}
		}
		if (currency) text += ` ${currency}`; // 1m EGP

		return text;
	}

	node.textContent = showMeTheMoney();
};

export default monetize;
