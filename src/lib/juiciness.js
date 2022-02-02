export function typewriter(node, { speed = 1 }) {
	const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

	if (!valid) {
		throw new Error(`This transition only works on elements with a single text node child`);
	}

	const text = node.textContent;
	const duration = text.length / (speed * 0.01);

	return {
		duration,
		tick: (t) => {
			const i = Math.trunc(text.length * t);
			node.textContent = text.slice(0, i);
		}
	};
}

import { elasticOut } from 'svelte/easing';
export function flash(node, { duration = 500, delay = 0 }) {
	const o = +getComputedStyle(node).opacity;
	return {
		duration,
		delay,
		css(t) {
			let eased = elasticOut(t);
			return `opacity: ${eased * o}`;
		}
	};
}
