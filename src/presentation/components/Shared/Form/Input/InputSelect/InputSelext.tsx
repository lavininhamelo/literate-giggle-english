import React from 'react';

import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { Label, Select, SelectWrapper, Options, Option, Item, Icon } from './styles';

interface Props {
	list: any;
	label?: string;
	value?: string;
	option?: string;
}

const InputSelect: React.FC<Props> = ({ label = 'Select', option, value, list }, props) => {
	const [selected, setSelected] = useState(list[0]);

	function getValue(key, item) {
		let keys = key.split('.');
		let obj = item;
		for (let i = 0; i < keys.length; i++) {
			obj = obj[keys[i]];
		}
		return obj || 'error';
	}

	return (
		<Listbox {...props} value={selected} onChange={setSelected}>
			{({ open }) => (
				<Fragment>
					<Label>{label}</Label>
					<Select>
						<SelectWrapper>
							<span className="block truncate">
								{!!value || !!option ? getValue(option, selected) : <p>{selected}</p>}
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
									<Option
										key={!!option ? getValue(option, item) : item}
										value={!!value ? getValue(value, item) : item}>
										{({ selected, active }) => (
											<Item selected={selected} active={active}>
												{!!option ? getValue(option, item) : <p>{item}</p>}
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
