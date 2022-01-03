import React, { HTMLAttributes } from 'react';

import { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { Label, Select, SelectWrapper, Options, Option, Item, Icon } from './styles';

interface Props extends HTMLAttributes<HTMLSelectElement> {
	list: any;
	label?: string;
	option?: string;
	value?: any;
	onChange?: (event: React.FormEvent<HTMLSelectElement>) => any;
}

const InputSelect: React.FC<Props> = (
	{ label = 'Select', option, list, value, onChange },
	props,
) => {
	function getOption(key, item) {
		if (key && item) {
			let keys = key.split('.');
			let obj = item;
			for (let i = 0; i < keys.length; i++) {
				obj = obj[keys[i]];
			}
			return obj;
		} else return;
	}

	return (
		<Listbox className="flex-1" {...props} onChange={onChange} value={value}>
			{({ open }) => (
				<Fragment>
					<Label>{label}</Label>
					<Select className="w-full">
						<SelectWrapper>
							<span className="block truncate">
								{!!option ? getOption(option, value) : <p>{value}</p>}
							</span>
							<Icon>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true">
									<path
										fillRule="evenodd"
										d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
										clipRule="evenodd"
									/>
								</svg>
							</Icon>
						</SelectWrapper>
						<Transition
							show={open}
							as={Fragment}
							leave="transition ease-in duration-100"
							leaveFrom="opacity-100"
							leaveTo="opacity-0">
							<Options>
								{list.map((item) => (
									<Option key={!!option ? getOption(option, item) : item} value={item}>
										{({ selected, active }) => (
											<Item selected={selected} active={active}>
												{!!option ? getOption(option, item) : <p>{item}</p>}
											</Item>
										)}
									</Option>
								))}
							</Options>
						</Transition>
					</Select>
				</Fragment>
			)}
		</Listbox>
	);
};

export default InputSelect;
