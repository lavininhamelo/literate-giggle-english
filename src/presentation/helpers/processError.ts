import { onError } from 'application/helpers';

export function processError(error: Error) {
	let message = onError(error);
	alert(message);
}
