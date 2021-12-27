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
			transitionProperty: {
				width: 'width',
			},
			minWidth: {
				0: '0',
				'1/4': '25%',
				'1/2': '50%',
				'3/4': '75%',
				full: '100%',
				4: '1rem',
				7: '1.75rem',
				10: '2.5rem',
				12: '3rem',
				14: '3.5rem',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
