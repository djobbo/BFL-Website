import React, { FC } from 'react';
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
            <MainNavLink to="#">A propos</MainNavLink>
        </MainNav>
    );
};
