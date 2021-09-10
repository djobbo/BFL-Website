import { Page } from '../components/Page';
import Head from 'next/head';

export default function ContactPage() {
	return (
		<>
			<Head>
				<title>Contact | Brawlhalla French League</title>
				<meta
					content='Contact | Brawlhalla French League'
					property='og:title'
				/>
			</Head>
			<Page>
				<h1>Contact</h1>
			</Page>
		</>
	);
}
