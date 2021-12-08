// import '../../styles/globals';
import React, { useState } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { light, dark } from 'presentation/components/Theme/theme';
import styled from 'styled-components';
import GlobalStyles from 'presentation/components/Theme/GlobalStyles';
import 'presentation/styles/globals.css';
import { DefaultLayout } from 'presentation/layouts/DefaultLayout';
import { Icon } from 'presentation/components/Shared/Icon';
import 'react-toggle/style.css';
import Toggle from 'react-toggle';

function MyApp({ Component, pageProps }: AppProps) {
	const [isDark, setDarkTheme] = useState(false);

	return (
		<ThemeProvider theme={isDark ? dark : light}>
			<DefaultLayout>
				<GlobalStyles />
				<Component {...pageProps} />
				<Container>
					<Icon name="brightness_6" color="#000" className="mx-4" />
					<Toggle defaultChecked={isDark} onChange={() => setDarkTheme(!isDark)} />
					<Icon name="dark_mode" color="#000" className="mx-4" />
				</Container>

				{/* <button onClick={() => setDarkTheme(!isDark)}>Trocar Tema</button> */}
			</DefaultLayout>
		</ThemeProvider>
	);
}
export default MyApp;

export const Container = styled.div`
	position: absolute;
	display: flex;
	top: 0;
	right: 0;
	padding: 16px;
	align-items: center;
`;
