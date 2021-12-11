import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export function Notify(message: string, isError = false) {
	const positive = () =>
		toast('🦄 ' + message, {
			position: 'top-right',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});

	const negative = () =>
		toast('🦄 ' + message, {
			position: 'top-right',
			autoClose: 5000,
			hideProgressBar: false,
			type: 'error',
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});

	return isError ? negative() : positive();
}
