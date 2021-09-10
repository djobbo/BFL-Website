export interface INavItem {
	title: string;
	link: string;
	external?: boolean;
}

export const mainNavigationMenu: INavItem[] = [
	{
		title: 'Accueil',
		link: '/',
	},
	{
		title: 'Actus',
		link: '/actus',
	},
	{
		title: 'Stream',
		link: 'https://www.twitch.tv/brawlhalla_french_league',
		external: true,
	},
	{
		title: 'A Propos',
		link: '/about',
	},
];
