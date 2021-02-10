import '../styles/globals.scss';
import '../styles/nprogress.scss';
import { AppProps } from 'next/app';
import NProgress from 'nprogress';
import Router from 'next/router';
import { AnimateSharedLayout } from 'framer-motion';
import Head from 'next/head';

Router.events.on('routeChangeStart', (url) => {
	console.log(`Loading: ${url}`);
	NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<link
					rel='icon'
					type='image/png'
					href='/assets/imgs/BFL_Logo.webp'
				/>
				<title>Brawlhalla French League</title>
				<meta
					name='viewport'
					content='width=device-width,initial-scale=1'
				/>
				<meta name='theme-color' content='#101114' />
				<meta
					name='description'
					content="Notre association est née d'un projet, savoir ce que souhaite la communauté esportive Française sur Brawlhalla. Ainsi suite à cette prise d'informations nous avons rassemblé une équipe de personnes motivées avec la volonté de faire évoluer l'esport Français sur Brawlhalla. Notre association a ainsi vu le jour en Novembre 2019 et a pu mobiliser plus 600 euros en récompenses de tournois depuis. (cashprize, loot in game...)"
					property='og:description'
				/>

				<meta content='Brawlhalla French League' property='og:title' />

				<meta
					content='Brawlhalla French League'
					property='og:site_name'
				/>

				<meta
					content='/assets/imgs/Background.webp'
					property='og:image'
				></meta>
			</Head>
			<AnimateSharedLayout>
				<div id='App'>
					<Component {...pageProps} />
				</div>
			</AnimateSharedLayout>
		</>
	);
}
