module.exports = {
	presets: [
		'@babel/preset-env',
		'@babel/preset-react',
		'@babel/preset-typescript',
		['next/babel', { 'preset-react': { runtime: 'automatic' } }],
	],
	plugins: [
		'babel-plugin-macros',
		['styled-components', { ssr: true }],
		'@babel/transform-runtime',
	],
};
