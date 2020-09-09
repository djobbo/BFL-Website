export interface INavItem {
    title: string;
    link: string;
    external?: boolean;
    target?: string;
}

export interface IMainNavItem extends INavItem {
    name?: string;
    subNav?: { title: string; link: string }[];
}

export const mainNavigationMenu: IMainNavItem[] = [
    {
        name: 'home',
        title: 'Accueil',
        link: '/',
    },
    {
        name: 'news',
        title: 'Actus',
        link: '/actus',
    },
    {
        title: 'Tournois',
        link: 'https://smash.gg/tournament/brawlhalla-french-league-year-one/details',
        external: true,
        target: '_blank',
    },
    {
        name: 'about',
        title: 'A Propos',
        link: '/about',
        subNav: [
            {
                title: 'Contact',
                link: '#',
            },
            {
                title: 'Index des Structures',
                link: '/structures',
            },
            {
                title: 'Partenaires & Sponsors',
                link: '#',
            },
        ],
    },
];
