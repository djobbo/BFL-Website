import { Page } from '../components/Page';
import Head from 'next/head';

export default function ContactPage() {
	return (
		<>
			<Head>
				<title>Contact | Brawlhalla French Lobby</title>
				<meta
					content='Contact | Brawlhalla French Lobby'
					property='og:title'
				/>
			</Head>
			<Page>
				<h1>Contact</h1>
			</Page>
		</>
	);
}
