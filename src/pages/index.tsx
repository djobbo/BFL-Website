import styles from '../styles/pages/HomePage.module.scss';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { MainLayout } from '../layout/MainLayout';
import Head from 'next/head';

export default function HomePage() {
	return (
		<>
			<Head>
				<title>Accueil | BFL</title>
				<meta content='Accueil | BFL' property='og:title' />
			</Head>
			<MainLayout mainBackgroundImg='/assets/imgs/Background.webp'>
				<motion.img
					className={styles.mainLogo}
					src='/assets/imgs/Full_BFL_Logo.webp'
					animate={{ scale: 1, opacity: 1 }}
					initial={{ scale: 2.5, opacity: 0 }}
					transition={{ duration: 0.3, ease: 'easeOut' }}
				/>
				<Link href='#'>
					<motion.a
						className={styles.ctaBtn}
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
					>
						Nous Rejoindre
					</motion.a>
				</Link>
			</MainLayout>
		</>
	);
}
