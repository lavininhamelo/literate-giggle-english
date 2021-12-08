import { LeftMenu } from 'presentation/components/Shared/Layout/LeftMenu';
import React from 'react';

import { Container, WrapperPage } from './styles';

const DefaultLayout: React.FC = ({ children }) => {
	return (
		<Container>
			<LeftMenu />
			<WrapperPage>{children}</WrapperPage>
		</Container>
	);
};

export { DefaultLayout };
