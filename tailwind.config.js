module.exports = {
	purge: ['./src/**/*.{js,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: '#FFA69E',
				secondary: '#AA4465',
				background: '#FEFEFE',
				text: '#1F2937',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
