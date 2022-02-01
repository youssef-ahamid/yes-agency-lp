module.exports = {
	content: ['./src/**/*.svelte'],
	theme: {
		extend: {
			colors: {
				primary: '#EDF7F6',
				secondary: {
					DEFAULT: '#161626',
					light: '#242331'
				},
				tertiary: '#FCDC4D',
				green: '#00A676',
				blue: {
					DEFAULT: '#226CE0',
					dark: '#094074'
				},
				purple: '#C455A8',
				orange: '#FC5130',
				disabled: 'rgb(115 115 115)'
			},
			fontFamily: {
				slab: 'Montagu Slab, serif',
				sans: 'Sora, sans-serif'
			}
		}
	},
	plugins: [require('tailwind-scrollbar-hide')]
};
