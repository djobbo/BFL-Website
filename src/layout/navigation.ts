export interface INavItem {
	title: string;
	link: string;
	target?: string;
}

export interface IMainNavItem<T extends string> extends INavItem {
	name?: T;
	subNav?: { title: string; link: string }[];
}

export type MainNavNames = 'home' | 'news' | 'about';

export const mainNavigationMenu: IMainNavItem<MainNavNames>[] = [
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
		link:
			'https://smash.gg/tournament/brawlhalla-french-league-year-one/details',
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
