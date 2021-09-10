import styles from './Container.module.scss';
import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

export const Container = ({ children }: Props) => {
	return <div className={styles.container}>{children}</div>;
};
