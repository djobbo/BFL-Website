import React, { FC, PropsWithChildren, ReactNode } from 'react';
import { Page } from '@components/Page';
import Image from 'next/image';

import styles from '@styles/MainLayout.module.scss';
import { motion } from 'framer-motion';

import { Header } from '@components/Header';

interface Props {
	mainBackgroundImg?: string;
	children: ReactNode;
}

export const MainLayout: FC<Props> = ({ children, mainBackgroundImg }) => {
	return (
		<div>
			{mainBackgroundImg && (
				<motion.div
					className={styles.background}
					initial={{ scale: 1, opacity: 0 }}
					animate={{ scale: 1.05, opacity: '0.05' }}
					transition={{ duration: 5, ease: 'easeOut' }}
				>
					<Image src={mainBackgroundImg} layout='fill' />
				</motion.div>
			)}
			<Header />
			{children}
		</div>
	);
};
