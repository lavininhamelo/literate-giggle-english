export function onError(error) {
	let message = error.toString();

	const errors = {
		AccessDeniedError: 'Usuário não autenticado.',
		UnexpectedError: 'Erro inesperado de conexão.',
	};

	if (error.name) {
		message = errors[error.name];
	}

	return message;
}
