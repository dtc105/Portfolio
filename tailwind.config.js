/** @type {import("tailwindcss").Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
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
			}
			
		},
	},
	plugins: [],
}

