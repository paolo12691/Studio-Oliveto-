export const makeBooking = async (data) => {
	try {
		const response = await fetch('http://localhost:5050/booking', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});

		if (!response.ok) {
			throw new Error('Errore durante la prenotazione');
		}

		const result = await response.json();
		return result;
	} catch (error) {
		throw new Error(error.message);
	}
};
