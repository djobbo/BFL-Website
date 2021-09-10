import { MainLayout } from '../layout/MainLayout';
import Head from 'next/head';

export default function StructuresPage() {
	return (
		<>
			<Head>
				<title>Structures | BFL</title>
				<meta content='Structures | BFL' property='og:title' />
			</Head>
			<MainLayout mainBackgroundImg='/assets/imgs/Background.webp'>
				Structures
			</MainLayout>
		</>
	);
}
