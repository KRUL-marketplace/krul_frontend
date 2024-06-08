import { InvoiceBody } from '@models/invoice.model';

export const createInvoiceLink = async (body: InvoiceBody) => {
	try {
		const response = await fetch(`https://api.telegram.org/${process.env.TELEGRAM_BOT_TOKEN}/createInvoiceLink`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		});
		return await response.json();
	} catch (error) {
		console.log('error', error);
	}
};
