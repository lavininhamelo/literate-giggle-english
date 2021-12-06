import { Icon } from 'presentation/components/Icon';
import Logo from '../../../../../public/favicon.ico';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Container, Menu, MenuItems, Item } from './styles';

const LeftMenu: React.FC = () => {
	return (
		<Container>
			<Menu>
				<Image src={Logo} />
				<MenuItems>
					<Link href="/">
						<Item>
							<Icon name="home" />
						</Item>
					</Link>
					<Link href="/questionnaire">
						<Item>
							<Icon name="school" />
						</Item>
					</Link>
					<Link href="/">
						<Item>
							<Icon name="shuffle" />
						</Item>
					</Link>
					<Link href="/">
						<Item>
							<Icon name="post_add" />
						</Item>
					</Link>
					<Link href="/">
						<Item>
							<Icon name="info" />
						</Item>
					</Link>
				</MenuItems>
			</Menu>
			<Icon name="logout" color="primary" />
		</Container>
	);
};

export { LeftMenu };
