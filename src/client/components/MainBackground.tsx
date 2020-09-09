import { motion } from 'framer-motion';
import styled from 'styled-components';

export const MainBackground = styled(motion.img)`
    z-index: -100;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.15;
    filter: saturate(0.1);
`;
