import styles from './MainNav.module.scss';
import { mainNavigationMenu, MainNavNames } from '../layout/navigation';
import Link from 'next/link';
import { MainNavDropdown } from './MainNavDropdown';

interface Props {
	activePage: MainNavNames;
}

export function MainNav({ activePage }: Props) {
	return (
		<nav className={styles.mainNav}>
			<Link href='/'>
				<a className={styles.link}>
					<img src='/assets/imgs/BFL_Logo.webp' width='64px' />
				</a>
			</Link>
			{mainNavigationMenu.map((navItem, i) => {
				const active = navItem.name && activePage === navItem.name;

				return navItem.subNav ? (
					<MainNavDropdown
						key={i}
						href={navItem.link}
						active={active}
						subNav={navItem.subNav}
					>
						{navItem.title}
					</MainNavDropdown>
				) : (
					<Link key={i} href={navItem.link}>
						<a
							className={`${styles.link} ${
								active ? styles.active : ''
							}`} //TODO: active
							target={navItem.target}
						>
							{navItem.title}
						</a>
					</Link>
				);
			})}
		</nav>
	);
}

export function MobileNav({}: Props) {}
