/** @type {import("tailwindcss").Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
		colors: {
			"blue": "#94cad8",
			"gray": "#4c5f6b",
			"dark-gray": "#2B3D41",
			"green": "#EFF2C0",
			"brown": "#BEA57D",
			"transparent": "#0000",
			"white": "#FFF",
			"1": "#f0f0f0",
			"black": "#000"
		},
		extend: {
			height: {
				"cap": "1cap",
				"7.5": "1.875rem",
				"15": "3.75rem",
			},
			margin: {
				"4.5": "1.125rem",
				"7.5": "1.875rem"
			},
			padding: {
				"4.5": "1.125rem",
				"7.5": "1.875rem"
			},
			spacing: {
				"4/5": "80%",
				"5/6": "83.333333%",
			},
			gridTemplateRows: {
				"login": "1fr 2rem 1fr"
			},
			gridTemplateColumns: {
				"centered": "1fr auto 1fr"
			},
			borderRadius: {
				"circle": "50%"
			}
		},
	},
	plugins: [],
}

