module.exports = {
	purge: [],
	theme: {
		pink: {
			light: '#ff7ce5',
			DEFAULT: '#ff49db',
			dark: '#ff16d1',
		},
		extend: {
			backgroundImage: (theme) => ({
				'cont-pattern': "url('/img/242.jpg')",
			}),
		},
	},
	variants: {},
	plugins: [
		require('@tailwindcss/custom-forms'),
		require('tailwind-heropatterns')({
			variants: [],
			patterns: ['polka-dots', 'signal'],
			colors: {
				default: '#9C92AC',
			},
			opacity: {
				default: '0.4',
			},
		}),
	],
};
