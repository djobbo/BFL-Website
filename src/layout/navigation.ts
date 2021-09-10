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
		title: 'Tournois',
		link: 'https://smash.gg/tournament/brawlhalla-french-league-year-one/details',
		external: true,
	},
	{
		title: 'A Propos',
		link: '/about',
	},
];
