/** @type {import("tailwindcss").Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
		extend: {
			height: {
				"cap": "1cap"
			},
			spacing: {
				"4/5": "80%",
				"5/6": "83.333333%",
			},
			
		},
	},
	plugins: [],
}

