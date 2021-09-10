import { MainLayout } from '../layout/MainLayout';
import Head from 'next/head';
import styles from '../styles/pages/HomePage.module.scss';
import { Container } from '@components/Container';
import Link from 'next/link';
import { useScroll } from '@hooks/useScroll';
import { useEffect, useRef, useState } from 'react';
import { GetServerSideProps } from 'next';
import { fetchHomeContent, HomePageContent } from '@graphql/queries/home';
import { ArticlePreviewGroup } from '@components/ArticlePreviewGroup';

interface Props {
	homeContent: HomePageContent;
}

export default function HomePage({
	homeContent: { about, results, blogPosts },
}: Props) {
	const { scrollY } = useScroll();
	const trailerVideoRef = useRef<HTMLIFrameElement>(null);
	const [trailerVideoAutoplay, setTrailerVideoAutoplay] = useState(false);

	useEffect(() => {
		if (!trailerVideoRef || !trailerVideoRef.current) return;

		const offset = 480;
		const { offsetTop, offsetHeight } = trailerVideoRef.current;

		setTrailerVideoAutoplay(
			scrollY + offset > offsetTop && scrollY < offsetTop + offsetHeight
		);
	}, [scrollY]);

	useEffect(() => {
		trailerVideoRef.current.contentWindow.postMessage(
			JSON.stringify({
				event: 'command',
				func: trailerVideoAutoplay ? 'playVideo' : 'pauseVideo',
			}),
			'https://www.youtube-nocookie.com'
		);
	}, [trailerVideoAutoplay]);

	return (
		<>
			<Head>
				<title>Accueil | Brawlhalla French League</title>
				<meta
					content='Accueil | Brawlhalla French League'
					property='og:title'
				/>
			</Head>
			<MainLayout mainBackgroundImg='/assets/images/Background.webp'>
				<Container>
					<div className={styles.landing}>
						<div className={styles.content}>
							<span className={styles.subtitle}>
								Bienvenue sur la
							</span>
							<h1 className={styles.title}>
								Brawlhalla French League
							</h1>
							<div className={styles.ctaContainer}>
								<Link href='#'>
									<a className={styles.cta}>Rejoins-Nous</a>
								</Link>
								<div className={styles.iconsContainer}>
									<Link href='#'>
										<a
											target='_blank'
											className={styles.iconLink}
										>
											<svg
												role='img'
												viewBox='0 0 24 24'
												xmlns='http://www.w3.org/2000/svg'
											>
												<title>Discord</title>
												<path d='M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z' />
											</svg>
										</a>
									</Link>
									<Link href='#'>
										<a
											target='_blank'
											className={styles.iconLink}
										>
											<svg
												role='img'
												viewBox='0 0 24 24'
												xmlns='http://www.w3.org/2000/svg'
											>
												<title>Twitter</title>
												<path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' />
											</svg>
										</a>
									</Link>
									<Link href='#'>
										<a
											target='_blank'
											className={styles.iconLink}
										>
											<svg
												role='img'
												viewBox='0 0 24 24'
												xmlns='http://www.w3.org/2000/svg'
											>
												<title>Twitch</title>
												<path d='M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z' />
											</svg>
										</a>
									</Link>
									<Link href='#'>
										<a
											target='_blank'
											className={styles.iconLink}
										>
											<svg
												role='img'
												viewBox='0 0 24 24'
												xmlns='http://www.w3.org/2000/svg'
											>
												<title>YouTube</title>
												<path d='M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' />
											</svg>
										</a>
									</Link>
									<Link href='#'>
										<a
											target='_blank'
											className={styles.iconLink}
										>
											<svg
												role='img'
												viewBox='0 0 24 24'
												xmlns='http://www.w3.org/2000/svg'
											>
												<title>smash.gg</title>
												<path d='M18.01 4.32c-.622.044-1.096.236-1.41.574a1.438 1.438 0 00-.332.546c-.138.366-.134.288-.142 2.57-.008 2.096-.002 2.328.066 2.628.142.612.524 1.03 1.124 1.228.342.114.58.14 1.192.128.586-.01.686-.028.962-.17a1.35 1.35 0 00.496-.494l.074-.14-.004.6c-.006.686-.01.7-.176.784l-.088.046H16.5v2h1.986c1.976 0 2.386-.012 2.714-.072.98-.178 1.508-.71 1.62-1.628.012-.11.02-1.616.02-4.394V4.3h-2.76v.93l-.048-.114c-.17-.412-.48-.664-.932-.756-.226-.046-.736-.066-1.09-.04zm1.844 2.124a.41.41 0 01.128.15l.048.096v2.94l-.048.096a.392.392 0 01-.128.15c-.08.052-.088.054-.392.054-.292 0-.316-.002-.388-.046-.152-.096-.144.004-.15-1.68-.004-1.018.002-1.53.016-1.584.052-.196.16-.242.552-.236.268.006.284.008.362.06zM10.17 4.32c-.62.044-1.048.214-1.384.55-.16.16-.194.21-.282.392-.112.23-.172.448-.204.738-.016.128-.02.872-.016 2.29.008 2.048.008 2.104.05 2.28.096.412.218.648.464.89.294.29.604.434 1.112.51.312.046 1.084.042 1.33-.01.398-.082.72-.314.886-.64l.076-.15-.006.61c-.006.698-.01.71-.176.794l-.088.046H8.66v2.002l2.176-.008c1.594-.006 2.22-.014 2.344-.032.6-.09 1.094-.314 1.372-.628.186-.21.314-.478.394-.824.042-.18.042-.184.048-4.506L15 4.3h-2.76v.474l-.002.476-.039-.104c-.147-.416-.48-.692-.944-.786-.222-.046-.733-.064-1.086-.04zm1.844 2.124a.41.41 0 01.128.15l.048.096.006 1.396c.004.91-.002 1.436-.016 1.51-.026.142-.094.246-.194.296-.064.032-.122.038-.376.038-.34 0-.402-.02-.48-.15-.04-.068-.04-.098-.04-1.62 0-1.52 0-1.552.04-1.62a.336.336 0 01.13-.116c.084-.044.11-.046.382-.04.278.006.294.008.372.06zM2.64 9.11v9.11H0v1.2h2.64V24h3.84v-4.58H24v-1.2H6.48V0H2.64z' />
											</svg>
										</a>
									</Link>
								</div>
							</div>
						</div>
						<div className={styles.mainLogo}>
							<img src='/assets/images/Full_BFL_Logo.webp' />
						</div>
					</div>
				</Container>
				<Container>
					<div className={styles.trailerVideo}>
						<iframe
							ref={trailerVideoRef}
							width='801'
							height='450'
							src={`https://www.youtube-nocookie.com/embed/0-ZHkitf5jg?mute=1&enablejsapi=1`}
							title='YouTube video player'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
						></iframe>
					</div>
				</Container>
				<div className={styles.about}>
					<div className={styles.content}>
						<img src='/assets/images/BFL_Logo.webp' alt='' />
						<div
							dangerouslySetInnerHTML={{
								__html: about.html,
							}}
						/>
					</div>
				</div>
				<div className={styles.results}>
					<Container>
						<h2 className={`${styles.sectionTitle}`}>
							Derniers Résultats
						</h2>
						<div className={styles.resultsImages}>
							{results.map((result) => (
								<img src={result.url} alt='' />
							))}
						</div>
					</Container>
				</div>
				<Container>
					<h2 className={`${styles.sectionTitle}`}>Actus</h2>
					<ArticlePreviewGroup articles={blogPosts} />
				</Container>
			</MainLayout>
		</>
	);
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
	try {
		const homeContent = await fetchHomeContent();

		console.log(homeContent);

		return {
			props: { homeContent },
		};
	} catch (e) {
		console.error(e);
		return {
			notFound: true,
		};
	}
};
