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
				blue: '#226CE0',
				purple: '#C455A8',
				orange: '#FC5130'
			},
			fontFamily: {
				slab: 'Montagu Slab, serif',
				sans: 'Sora, sans-serif'
			}
		}
	},
	plugins: []
};
