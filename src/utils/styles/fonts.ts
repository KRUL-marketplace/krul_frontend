import { Roboto } from 'next/font/google';

const roboto = Roboto({
	weight: ['400', '500', '700'],
	subsets: ['latin'],
	style: ['normal'],
	display: 'swap',
});

export const fonts = {
	roboto,
};
