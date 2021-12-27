import styled from 'styled-components';
import { Listbox } from '@headlessui/react';
import tw from 'twin.macro';

export const Label = styled(Listbox.Label)`
	color: ${(props) => props.theme.textLabel};
	${tw`mb-2`};
`;

export const Select = styled.div`
	${tw`mt-2 relative`};
`;

export const SelectWrapper = styled(Listbox.Button)`
	${tw`w-full rounded border border-solid border-gray-200 
	h-12 flex items-center justify-between px-4`};
	&:focus-within {
		border-color: ${(props) => props.theme.primary};
		${tw`shadow-md`};
	}
`;

export const Options = styled(Listbox.Options)`
	${tw`absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 
	rounded-md  text-base ring-1 ring-black ring-opacity-5 
	overflow-auto focus:outline-none sm:text-sm`};
`;

export const Option = styled(Listbox.Option)`
	${tw`cursor-default select-none relative text-gray-900`};
	${(props) => props.active && tw`text-white bg-indigo-600`};
`;

export const Item = styled.div`
	${tw`py-3 pl-3 pr-9`};
	${(props) => props.active && `background:` + props.theme.primary + '33'};
	${(props) => props.selected && `background:` + props.theme.primary};
	${(props) => (props.active && props.selected ? tw`text-white` : tw`text-gray-900`)};
`;

export const Icon = styled.div`
	svg {
		${tw`h-5 w-5 text-gray-400`};
	}
`;
