import styles from '../styles/pages/ErrorPage.module.scss';
import homePageStyles from '../styles/pages/HomePage.module.scss';
import { MainLayout } from '../layout/MainLayout';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Head from 'next/head';

export default function ErrorPage() {
	return (
		<>
			<Head>
				<title>Oops | Brawlhalla French League</title>
				<meta
					content='Oops | Brawlhalla French League'
					property='og:title'
				/>
			</Head>
			<MainLayout mainBackgroundImg='/assets/imgs/Background.webp'>
				<motion.h1
					className={styles.title}
					initial={{ y: -100 }}
					animate={{ y: 0 }}
				>
					Oops, cette page n'existe pas!
				</motion.h1>
				<Link href='/'>
					<motion.a
						className={homePageStyles.ctaBtn}
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
					>
						Retour à l' Accueil
					</motion.a>
				</Link>
			</MainLayout>
		</>
	);
}
