'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { MediaContextProvider } from '@/client/ui/helpers/media';

export function Providers({ children }: { children: ReactNode }) {
	return (
		<ChakraProvider>
			<MediaContextProvider>{children}</MediaContextProvider>
		</ChakraProvider>
	);
}
