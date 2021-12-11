import { processError } from './processError';

export async function processRequest(event, usecase: any, body: any = null) {
	event.preventDefault();
	try {
		const result = await usecase.run(body);
		return result || false;
	} catch (e) {
		processError(e);
	} finally {
	}
}
