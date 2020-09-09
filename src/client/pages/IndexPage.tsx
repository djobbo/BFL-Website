import { motion } from 'framer-motion';
import React, { FC } from 'react';
import styled from 'styled-components';
import { MainLayout } from '../layout/MainLayout';

const MainLogo = styled(motion.img)`
    height: 18rem;
    margin-bottom: 1rem;
    max-width: 100%;
`;

const CTAButton = styled(motion.a)`
    padding: 0.75rem 1.5rem;
    background-color: transparent;
    border: 1px solid #00ff97;
    font-weight: bold;
    text-transform: uppercase;
    color: #00ff97;
    font-size: 1.1rem;
    font-family: 'Roboto Condensed', sans-serif;

    &:hover {
        background-color: #00ff97;
        color: #101114;
    }
`;

export const IndexPage: FC = () => {
    return (
        <MainLayout mainBackgroundImg="/assets/imgs/Background.jpg">
            <MainLogo
                src="/assets/imgs/Full_BFL_Logo.png"
                animate={{ scale: 1, opacity: 1 }}
                initial={{ scale: 2.5, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
            />
            <CTAButton
                href="#"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                {`>> Nous Rejoindre <<`}
            </CTAButton>
        </MainLayout>
    );
};
