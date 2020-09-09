import { motion } from 'framer-motion';
import React, { FC, PropsWithChildren } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MainNav = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 1200px;
    width: 100vw;
    margin: 0 auto;
    padding: 1rem 0;
`;

const MainNavLink = styled(Link)<{ active?: boolean }>`
    font-family: 'Roboto Condensed', sans-serif;
    color: white;
    text-transform: uppercase;
    font-size: 0.9rem;
    font-weight: bold;
    border-bottom: 2px solid transparent;
    color: white !important;

    &:hover {
        color: #00ff97 !important;
    }

    ${({ active }) =>
        active &&
        `
        border-bottom: 2px solid #00ff97;
    `}
`;

const MainNavDropdown = styled(motion.div)``;

interface MainNavDropdownLinkProps {
    to: string;
}

const MainNavDropdownLink: FC<PropsWithChildren<MainNavDropdownLinkProps>> = ({
    to,
    children,
}: PropsWithChildren<MainNavDropdownLinkProps>) => {
    const [dropdownOpened, setDropdownOpened] = useState(false);

    console.log('XD');
    return (
        <>
            <MainNavLink
                to={to}
                onMouseEnter={() => {
                    console.log('xd');
                    setDropdownOpened(true);
                }}
                onMouseLeave={() => {
                    setDropdownOpened(false);
                }}
            >
                {children}
            </MainNavLink>
            {dropdownOpened && (
                <MainNavDropdown>
                    <MainNavLink to="#">BRUH</MainNavLink>
                </MainNavDropdown>
            )}
        </>
    );
};

export const Navbar: FC = () => {
    return (
        <MainNav>
            <MainNavLink to="#">
                <img src="/assets/imgs/BFL_Logo.png" width="64px" />
            </MainNavLink>
            <MainNavLink to="#" active={true}>
                Accueil
            </MainNavLink>
            <MainNavLink to="/actus">Actus</MainNavLink>
            <MainNavLink to="#">Tournois</MainNavLink>
            <MainNavDropdownLink to="#">A proposssssss</MainNavDropdownLink>
        </MainNav>
    );
};
