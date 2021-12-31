import { onError } from 'application/helpers';
import { Notify } from 'presentation/components/Shared/Notification';

export function processError(error: Error) {
	let message = onError(error);
	Notify(message, true);
}
