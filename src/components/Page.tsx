import styles from './Page.module.scss';
import React, { FC, PropsWithChildren, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Props {
    title?: string;
}

const pageTransition = {
    in: {
        opacity: 1,
    },
    out: {
        opacity: 0,
    },
};

export const Page: FC<PropsWithChildren<Props>> = ({ children, title }: PropsWithChildren<Props>) => {
    useEffect(() => {
        if (!title) return;
        document.title = title;
    }, []);

    return (
        <motion.div
            className={styles.container}
            initial="out"
            animate="in"
            exit="out"
            variants={pageTransition}
            transition={{ duration: 0.2 }}
        >
            {children}
        </motion.div>
    );
};
