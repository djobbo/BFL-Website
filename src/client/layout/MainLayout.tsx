import React, { FC, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Page } from '../components/Page';

import { MainBackground } from '../components/MainBackground';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { usePopper } from 'react-popper';

import { mainNavigationMenu, INavItem } from './navigation';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 8rem 1fr auto;
`;

const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const MainNav = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 1200px;
    width: 100%;
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
    margin: 0.4rem 0;
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

const SocialsNav = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
    margin: 1rem 2rem;
    justify-items: center;
    row-gap: 0.5rem;
`;

const SocialLink = styled.a`
    display: flex;
    align-items: center;
    min-width: 16rem;

    &:hover {
        div {
            span {
                background-color: #4e70cc;
            }
        }
        svg {
            fill: #4e70cc;
        }
    }
`;

const SocialIconWrapper = styled.svg`
    height: 2rem;
    width: 2rem;
    min-height: 2rem;
    min-width: 2rem;
    margin-right: 0.5rem;
    fill: #ec424d;
`;

const SocialIconTitle = styled.span`
    background-color: #ec424d;
    padding: 0.1rem 0.2rem;
    text-transform: uppercase;
    font-size: 0.9rem;
    font-weight: bold;
    color: white;
`;

const SocialIconLink = styled.span`
    background-color: transparent !important;
    text-transform: uppercase;
    font-size: 0.75rem;
    color: white;
`;

interface SocialIconProps {
    title: string;
    path: string;
    link: string;
    href: string;
}

const SocialIcon: FC<SocialIconProps> = ({ title, path, link, href }: SocialIconProps) => {
    return (
        <SocialLink href={href} target="_blank">
            <SocialIconWrapper role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>{title}</title>
                <path d={path} />
            </SocialIconWrapper>
            <div>
                <SocialIconTitle>{title}</SocialIconTitle>
                <br />
                <SocialIconLink>{link}</SocialIconLink>
            </div>
        </SocialLink>
    );
};

const MainNavDropdown = styled(motion.div)`
    position: absolute;
    display: flex;
    flex-direction: column;
    background-color: #0a1f3c;
    padding: 0.7rem 1rem;
    top: 5rem;
    max-height: 240px;
    min-width: 10rem;
    border-left: 2px solid #ec424d;
    box-shadow: 0 0 16px #0a1f3c;
`;

interface MainNavDropdownLinkProps {
    to: string;
    active?: boolean;
    subNav: INavItem[];
}

const MainNavDropdownLink: FC<PropsWithChildren<MainNavDropdownLinkProps>> = ({
    to,
    children,
    active,
    subNav,
}: PropsWithChildren<MainNavDropdownLinkProps>) => {
    const [dropdownOpened, setDropdownOpened] = useState(false);
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const { styles, attributes } = usePopper(referenceElement, popperElement);

    return (
        <>
            <MainNavLink
                to={to}
                onMouseEnter={() => {
                    setDropdownOpened(true);
                }}
                onMouseLeave={() => {
                    setDropdownOpened(false);
                }}
                ref={setReferenceElement}
                active={active}
                style={styles.arrow}
            >
                {children}
                <AnimatePresence>
                    {dropdownOpened && (
                        <MainNavDropdown
                            ref={setPopperElement}
                            style={styles.popper}
                            {...attributes.popper}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            initial={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                        >
                            {subNav.map((navItem, i) => (
                                <MainNavLink
                                    key={i}
                                    to={navItem.external ? `/redirect#${navItem.link}` : navItem.link}
                                    target={navItem.target}
                                >
                                    {navItem.title}
                                </MainNavLink>
                            ))}
                        </MainNavDropdown>
                    )}
                </AnimatePresence>
            </MainNavLink>
        </>
    );
};

interface Props {
    mainBackgroundImg?: string;
    activePage?: 'home' | 'news' | 'about';
}

export const MainLayout: FC<PropsWithChildren<Props>> = ({
    children,
    mainBackgroundImg,
    activePage = 'home',
}: PropsWithChildren<Props>) => {
    return (
        <Page>
            {mainBackgroundImg && (
                <MainBackground
                    src={mainBackgroundImg}
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.05 }}
                    transition={{ duration: 5, ease: 'easeOut' }}
                />
            )}
            <Wrapper>
                <MainNav>
                    <MainNavLink to="/">
                        <img src="/assets/imgs/BFL_Logo.png" width="64px" />
                    </MainNavLink>
                    {mainNavigationMenu.map((navItem, i) =>
                        navItem.subNav ? (
                            <MainNavDropdownLink
                                key={i}
                                to={navItem.link}
                                active={navItem.name && activePage === navItem.name}
                                subNav={navItem.subNav}
                            >
                                {navItem.title}
                            </MainNavDropdownLink>
                        ) : (
                            <MainNavLink
                                key={i}
                                to={navItem.external ? `/redirect#${navItem.link}` : navItem.link}
                                active={navItem.name && activePage === navItem.name}
                                target={navItem.target}
                            >
                                {navItem.title}
                            </MainNavLink>
                        ),
                    )}
                </MainNav>
                <Content>{children}</Content>
                <SocialsNav>
                    <SocialIcon
                        href="https://twitch.tv/brawlhalla_french_league"
                        title="Twitch"
                        link="/Brawlhalla_French_League"
                        path="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"
                    />
                    <SocialIcon
                        href="https://discord.gg/xjnt9y8"
                        title="Discord"
                        link="/xjnt9y8"
                        path="M20.222 0c1.406 0 2.54 1.137 2.607 2.475V24l-2.677-2.273-1.47-1.338-1.604-1.398.67 2.205H3.71c-1.402 0-2.54-1.065-2.54-2.476V2.48C1.17 1.142 2.31.003 3.715.003h16.5L20.222 0zm-6.118 5.683h-.03l-.202.2c2.073.6 3.076 1.537 3.076 1.537-1.336-.668-2.54-1.002-3.744-1.137-.87-.135-1.74-.064-2.475 0h-.2c-.47 0-1.47.2-2.81.735-.467.203-.735.336-.735.336s1.002-1.002 3.21-1.537l-.135-.135s-1.672-.064-3.477 1.27c0 0-1.805 3.144-1.805 7.02 0 0 1 1.74 3.743 1.806 0 0 .4-.533.805-1.002-1.54-.468-2.14-1.404-2.14-1.404s.134.066.335.2h.06c.03 0 .044.015.06.03v.006c.016.016.03.03.06.03.33.136.66.27.93.4.466.202 1.065.403 1.8.536.93.135 1.996.2 3.21 0 .6-.135 1.2-.267 1.8-.535.39-.2.87-.4 1.397-.737 0 0-.6.936-2.205 1.404.33.466.795 1 .795 1 2.744-.06 3.81-1.8 3.87-1.726 0-3.87-1.815-7.02-1.815-7.02-1.635-1.214-3.165-1.26-3.435-1.26l.056-.02zm.168 4.413c.703 0 1.27.6 1.27 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334.002-.74.573-1.338 1.27-1.338zm-4.543 0c.7 0 1.266.6 1.266 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334 0-.74.57-1.338 1.27-1.338z"
                    />
                    <SocialIcon
                        href="https://instagram.com/brawlhalla_french_league"
                        title="Instagram"
                        link="/Brawlhalla_French_League"
                        path="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
                    />
                    <SocialIcon
                        href="https://twitter.com/brawlhallafl"
                        title="Twitter"
                        link="/BrawlhallaFL"
                        path="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02zM23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"
                    />
                    <SocialIcon
                        href="https://youtube.com/channel/UCO5Q5IgPY82jUoNr4gMMFqw"
                        title="Youtube"
                        link="/channel/UCO5Q5IgPY82jUoNr4gMMFqw"
                        path="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"
                    />
                </SocialsNav>
            </Wrapper>
        </Page>
    );
};
