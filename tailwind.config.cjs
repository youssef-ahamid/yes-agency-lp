module.exports = {
	content: ['./src/**/*.svelte'],
	theme: {
		extend: {
			keyframes: {
				draw: {
					'0%': { strokeDasharray: '1000', strokeDashoffset: '1000' },
					'100%': { strokeDashoffset: '0' }
				}
			},
			animation: {
				draw: 'draw 4s ease-in-out forwards'
			},
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
				sans: 'Montserrat, sans-serif'
			}
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('tailwindcss-animation-delay'),
		require('tailwind-scrollbar-hide')
	]
};
