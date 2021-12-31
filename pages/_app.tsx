// import '../../styles/globals';
import React, { Suspense, useState } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import Toggle from 'react-toggle';

import { GlobalStyles } from 'presentation/components/Theme/GlobalStyles';
import { light, dark } from 'presentation/components/Theme/theme';
import { DefaultLayout } from 'presentation/layouts/DefaultLayout';
import { NotificationProvider } from 'presentation/components/Shared/Notification/';
import { Icon } from 'presentation/components/Shared/Icon';
import { StateProvider } from 'presentation/state/StateProvider';

import 'presentation/styles/globals.css';
import 'react-toggle/style.css';

function MyApp({ Component, pageProps }: AppProps) {
	const [isDark, setDarkTheme] = useState(false);

	return (
		<StateProvider>
			<ThemeProvider theme={isDark ? dark : light}>
				<NotificationProvider theme={isDark ? 'dark' : 'light'} />
				<DefaultLayout>
					<GlobalStyles />
					<Component {...pageProps} />
					<Container>
						<Icon name="brightness_6" color="#000" className="mx-4" />
						<Toggle defaultChecked={isDark} onChange={() => setDarkTheme(!isDark)} />
						<Icon name="dark_mode" color="#000" className="mx-4" />
					</Container>
				</DefaultLayout>
			</ThemeProvider>
		</StateProvider>
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
