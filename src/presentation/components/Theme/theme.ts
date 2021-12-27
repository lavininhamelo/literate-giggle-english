import { ThemeProvider } from 'styled-components';

export const light: ThemeProvider = {
	primary: '#5840b9',
	secondary: '#e887a7',
	white: '#fefefe',
	background: '#FEFEFE',
	backgroundLayout: '#5840b9',
	backgroundLightGray: '#F3F4F6',
	text: '#1F2937',
	textEmphasis: '#aaa',
	textLight: '#FEFEFE',
	inputLabel: '#374151',
};

export const dark: ThemeProvider = {
	primary: '#8373c3',
	secondary: '#e887a7',
	white: '#37465d',
	background: '#334155',
	backgroundLayout: '#1F2937',
	backgroundLightGray: '#3c4b62',
	text: '#FEFEFE',
	textEmphasis: '#FFFFFF',
	textLight: '#334155',
	inputLabel: '#F3F4F6',
};
