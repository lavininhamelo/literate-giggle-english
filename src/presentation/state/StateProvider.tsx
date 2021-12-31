import React from 'react';
import { RecoilRoot } from 'recoil';

const StateProvider: React.FC = ({ children }) => {
	return <RecoilRoot>{children}</RecoilRoot>;
};

export { StateProvider };
