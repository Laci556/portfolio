// import generateColors from './generateColors'

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	safelist: require('./generateColors.cjs')(),
	theme: {
		fontFamily: {
			sans: ['Neco-Variable', 'Neco', 'sans-serif']
		}
	},
	plugins: []
};
