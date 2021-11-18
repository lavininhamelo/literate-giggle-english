import { Icon } from 'presentation/components/Icon';
import Logo from '../../../../../public/favicon.ico';
import React from 'react';
import Image from 'next/image';

import { Container, Menu, MenuItems, Item } from './styles';

const LeftMenu: React.FC = () => {
	return (
		<Container>
			<Menu>
				<Image src={Logo} />
				<MenuItems>
					<Item>
						<Icon name="home" />
					</Item>
					<Item>
						<Icon name="school" />
					</Item>
					<Item>
						<Icon name="shuffle" />
					</Item>
					<Item>
						<Icon name="post_add" />
					</Item>
					<Item>
						<Icon name="info" />
					</Item>
				</MenuItems>
			</Menu>
			<Icon name="logout" color="primary" />
		</Container>
	);
};

export { LeftMenu };
