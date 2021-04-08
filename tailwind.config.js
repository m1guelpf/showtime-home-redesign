const colors = require('tailwindcss/colors')

module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				showtime: '#e45cff',
				stpink: '#e45cff',
				gray: colors.gray,
			},
			boxShadow: {
				header: 'rgb(0, 0, 0, .05) 0px 3px 6px 0px',
				'header-dark': 'rgb(255, 255, 255, .02) 0px 3px 6px 0px',
			},
			zIndex: {
				'-1': -1,
				1: 1,
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
}
