module.exports = {
	transform: {
		'^.+\\.js$': 'babel-jest',
		'^.+\\.svelte$': 'jest-transform-svelte',
	},
	moduleFileExtensions: ['js', 'svelte'],
	bail: false,
	verbose: false,
	collectCoverage: true,
	collectCoverageFrom: ['src/components/**/*.{js,svelte}'],
	setupFilesAfterEnv: [
		'@testing-library/svelte/cleanup-after-each',
		'@testing-library/jest-dom/extend-expect',
	],
};
