import { MainLayout } from '../layout/MainLayout';
import Head from 'next/head';

export default function AboutPage() {
	return (
		<>
			<Head>
				<title>About | Brawlhalla French Lobby</title>
				<meta
					content='About | Brawlhalla French Lobby'
					property='og:title'
				/>
			</Head>
			<MainLayout mainBackgroundImg='/assets/imgs/Background.webp'>
				About
			</MainLayout>
		</> //TODO: About
	);
}
