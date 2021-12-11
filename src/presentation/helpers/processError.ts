import { onError } from 'application/helpers';
import { Notify } from 'presentation/components/Shared/Notify';

export function processError(error: Error) {
	let message = onError(error);
	Notify(message, true);
}
