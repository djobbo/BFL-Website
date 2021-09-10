import React, { FC, PropsWithChildren, ReactNode } from 'react';
import { Page } from '@components/Page';

import styles from '@styles/MainLayout.module.scss';
import { motion } from 'framer-motion';

import { Header } from '@components/Header';
import { MainNavNames } from './navigation';

interface Props {
	mainBackgroundImg?: string;
	activePage?: MainNavNames;
	children: ReactNode;
}

export const MainLayout: FC<Props> = ({
	children,
	mainBackgroundImg,
	activePage = 'home',
}) => {
	return (
		<div>
			{mainBackgroundImg && (
				<motion.div
					className={styles.background}
					initial={{ scale: 1, opacity: 0 }}
					animate={{ scale: 1.05, opacity: '0.05' }}
					transition={{ duration: 5, ease: 'easeOut' }}
				>
					<motion.img
						src={mainBackgroundImg}
						width='100%'
						height='100%'
					/>
				</motion.div>
			)}
			<Header />
			{children}
		</div>
		// <Page>
		// 	{mainBackgroundImg && (
		// 		<motion.div
		// 			className={styles.background}
		// 			initial={{ scale: 1, opacity: 0 }}
		// 			animate={{ scale: 1.05, opacity: '0.05' }}
		// 			transition={{ duration: 5, ease: 'easeOut' }}
		// 		>
		// 			<motion.img
		// 				src={mainBackgroundImg}
		// 				width='100%'
		// 				height='100%'
		// 			/>
		// 		</motion.div>
		// 	)}
		// 	<div className={styles.container}>
		// 		<Header activePage={activePage} />
		// 		<div className={styles.content}>{children}</div>
		// 	</div>
		// </Page>
	);
};
