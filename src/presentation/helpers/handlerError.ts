import { onError } from 'application/helpers';

export function handleError(error: Error) {
	let message = onError(error);
	alert(message);
}
