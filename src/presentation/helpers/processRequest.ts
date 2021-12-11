import { Notify } from 'presentation/components/Shared/Notify';
import { processError } from './processError';

export async function processRequest(event, usecase: any, body: any = null) {
	event.preventDefault();
	try {
		const result = await usecase.run(body);
		Notify('Sucesso!');
		return result || false;
	} catch (e) {
		processError(e);
	} finally {
		console.log('Finish request!');
	}
}
