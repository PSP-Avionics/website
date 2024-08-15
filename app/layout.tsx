import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import ClientLayout from '../styles/ClientLayout';

import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Avionics Website',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<ClientLayout>{children}</ClientLayout>
			</body>
		</html>
	);
}
