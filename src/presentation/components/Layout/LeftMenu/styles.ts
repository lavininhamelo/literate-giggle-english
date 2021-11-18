import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.aside`
	${tw`w-16 py-8 max-h-screen min-h-screen flex flex-col justify-between items-center`};
`;

export const Menu = styled.nav`
	${tw`w-16 flex flex-col justify-between items-center`};
`;
export const MenuItems = styled.ul`
	${tw`mt-8 flex flex-col items-center`};
`;
export const Item = styled.li`
	${tw`mt-6 text-4xl flex flex-col items-center`};
	color: ${(props) => props.theme.primary};
`;
