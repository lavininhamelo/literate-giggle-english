import styled from 'styled-components';
import tw from 'twin.macro';
import { lighten } from 'polished';

export const Container = styled.aside`
	${tw`w-16 py-8 max-h-screen min-h-screen flex flex-col justify-between items-center`};
`;

export const Menu = styled.nav`
	${tw`w-16 flex flex-col justify-between items-center`};
`;
export const MenuItems = styled.ul`
	${tw`mt-8 flex flex-col items-center`}
`;
export const Item = styled.li`
	${tw`mt-6 text-4xl flex flex-col items-center p-2 cursor-pointer rounded-full`};
	color: ${(props) => props.theme.primary};

	&:hover {
		background: ${(props) => lighten(0.44, props.theme.primary)};
	}

	&:active {
		background: ${(props) => lighten(0.4, props.theme.primary)};
	}
`;
