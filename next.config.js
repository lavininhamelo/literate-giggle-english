/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	typescript: {
		ignoreBuildErrors: false,
	},
	webpack: (config) => {
		config.resolve.fallback = { fs: false, module: false, path: false, os: false };
		return config;
	},
};
