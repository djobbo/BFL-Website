import { MainLayout } from '../layout/MainLayout';
import Head from 'next/head';

export default function StructuresPage() {
	return (
		<>
			<Head>
				<title>Structures | Brawlhalla French Lobby</title>
				<meta
					content='Structures | Brawlhalla French Lobby'
					property='og:title'
				/>
			</Head>
			<MainLayout mainBackgroundImg='/assets/imgs/Background.webp'>
				Structures
			</MainLayout>
		</>
	);
}
