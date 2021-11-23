import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../src/presentation/components/Theme/GlobalStyles';
import { light, dark } from '../src/presentation/components/Theme/theme';
import '../src/presentation/styles/globals.css';

export const parameters = {
	backgrounds: {
		default: 'light',
		values: [
			{
				name: 'light',
				value: light.background,
			},
			{
				name: 'dark',
				value: dark.background,
			},
		],
	},
	actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
	(Story) => (
		<ThemeProvider theme={dark}>
			<GlobalStyles />
			<Story />
		</ThemeProvider>
	),
];
