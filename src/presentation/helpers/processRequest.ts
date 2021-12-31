import { Notify } from 'presentation/components/Shared/Notification';
import { processError } from './processError';

export async function processRequest(usecase: any, params?: any, quietRequest = false) {
	try {
		const result = await usecase.run(params);
		if (!quietRequest) {
			Notify('Success!');
		}
		return result || true;
	} catch (e) {
		if (!quietRequest) {
			processError(e);
		}
		return;
	} finally {
		console.log('Finish request!');
	}
}
