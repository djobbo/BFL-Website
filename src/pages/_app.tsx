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
					href='/assets/imgs/BFL_Logo.png'
				/>
			</Head>
			<AnimateSharedLayout>
				<div id='App'>
					<Component {...pageProps} />
				</div>
			</AnimateSharedLayout>
		</>
	);
}
