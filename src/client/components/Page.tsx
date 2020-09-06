import React, { FC, PropsWithChildren, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

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

const PageWrapper = styled(motion.div)`
    height: 100%;
`;

export const Page: FC<PropsWithChildren<Props>> = ({ children, title }: PropsWithChildren<Props>) => {
    useEffect(() => {
        if (!title) return;
        document.title = title;
    }, []);

    return (
        <PageWrapper initial="out" animate="in" exit="out" variants={pageTransition} transition={{ duration: 0.2 }}>
            {children}
        </PageWrapper>
    );
};
