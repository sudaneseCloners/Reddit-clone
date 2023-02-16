'use client';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@/chakre/theme';
import Navbar from '@/components/Navbar/Navbar';
import { RecoilRoot } from 'recoil';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body>
				<RecoilRoot>
					<ChakraProvider theme={theme}>
						<Navbar />
						{children}
					</ChakraProvider>
				</RecoilRoot>
			</body>
		</html>
	);
}
