// import '../../styles/globals';
import React, { useState } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { light, dark } from 'presentation/components/Theme/theme';
import styled from 'styled-components';
import GlobalStyles from 'presentation/components/Theme/GlobalStyles';
import 'presentation/styles/globals.css';
import { DefaultLayout } from 'presentation/layouts/DefaultLayout';
import { Icon } from 'presentation/components/Icon';
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
					<Icon name="heart" type="twoTone" />
					<Toggle defaultChecked={isDark} onChange={() => setDarkTheme(!isDark)} />
					<span className="ml-2">Dark Mode</span>
				</Container>
				{/* <button onClick={() => setDarkTheme(!isDark)}>Trocar Tema</button> */}
			</DefaultLayout>
		</ThemeProvider>
	);
}
export default MyApp;

export const Container = styled.div`
	display: flex;
	align-items: center;
`;
