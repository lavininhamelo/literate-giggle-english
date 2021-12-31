import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Props {
	theme: 'light' | 'dark';
}

const NotificationProvider: React.FC<Props> = ({ children, theme }) => {
	return <ToastContainer theme={theme}>{children}</ToastContainer>;
};

export { NotificationProvider };
