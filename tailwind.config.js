/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class', // or 'media' if you want to use the user's OS setting
	content: [
		'./components/**/*.{vue,js,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}',
		'./app.vue',
	],
	theme: {
		extend: {
			colors: {
				light: {
					bg: '#ffffff',
					text: '#000000',
					primary: '#4a5568',
				},
				dark: {
					bg: '#1a202c',
					text: '#e2e8f0',
					primary: '#a0aec0',
				},
			},
		},
	},
	plugins: [],
};
