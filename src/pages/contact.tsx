import { Page } from '../components/Page';
import Head from 'next/head';

export default function ContactPage() {
	return (
		<>
			<Head>
				<title>Contact | BFL</title>
				<meta content='Contact | BFL' property='og:title' />
			</Head>
			<Page>
				<h1>Contact</h1>
			</Page>
		</>
	);
}
