import '../styles/globals.scss';
import '../styles/nprogress.scss';
import { AppProps } from 'next/app';
import NProgress from 'nprogress';
import Router from 'next/router';

Router.events.on('routeChangeStart', (url) => {
	console.log(`Loading: ${url}`);
	NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div id='App'>
			<Component {...pageProps} />
		</div>
	);
}
