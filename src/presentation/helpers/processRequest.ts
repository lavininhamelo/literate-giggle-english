import { Notify } from 'presentation/components/Shared/Notification';
import { processError } from './processError';

export async function processRequest(usecase: any, params?: any, quietRequest = false) {
	try {
		const result = await usecase.run(params);
		if (!quietRequest) {
			Notify('Success!');
		}
		return result || false;
	} catch (e) {
		if (!quietRequest) {
			processError(e);
		}
	} finally {
		console.log('Finish request!');
	}
}
