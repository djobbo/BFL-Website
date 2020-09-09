import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ArticleBanner = styled.img`
    z-index: -10;
    top: 0;
    width: 100%;
    height: 16rem;
    margin-bottom: 1rem;
    object-fit: cover;
    object-position: center;
`;

export const ArticleWrapper = styled(motion.div)`
    max-width: 1200px;
    margin: 0 auto;
    background-color: white;
`;

export const ArticleContent = styled.div`
    color: black;
    padding: 1rem;
`;
