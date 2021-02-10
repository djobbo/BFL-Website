import { MainLayout } from '../layout/MainLayout';
import Head from 'next/head';

export default function AboutPage() {
	return (
		<>
			<Head>
				<title>About | BFL</title>
			</Head>
			<MainLayout
				mainBackgroundImg='/assets/imgs/Background.jpg'
				activePage='about'
			>
				About
			</MainLayout>
		</> //TODO: About
	);
}
