const path = require('path');
module.exports = {
	stories: ['../src/**/*.stories.tsx'],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
	core: {
		builder: 'webpack5',
	},

	typescript: { reactDocgen: false },
};
