import styles from './Header.module.scss';
import { mainNavigationMenu } from '@layout/navigation';
import Link from 'next/link';
import { useScroll } from '@hooks/useScroll';

export const Header = () => {
	const { scrollY } = useScroll();

	return (
		<header
			className={`${styles.mainNav} ${scrollY > 0 ? styles.scroll : ''}`}
		>
			<Link href='/'>
				<a className={styles.logo}>
					<img src='/assets/images/BFL_Logo.webp' />
				</a>
			</Link>

			<nav className={styles.nav}>
				{mainNavigationMenu.map((navItem, i) => {
					const active = false;
					// const active = navItem.name && activePage === navItem.name;

					return (
						<Link key={i} href={navItem.link}>
							<a
								className={`${styles.link} ${
									active ? styles.active : ''
								}`}
								target={navItem.external ? '_blank' : null}
							>
								{navItem.title}
							</a>
						</Link>
					);
				})}
				<div className={styles.ctaContainer}>
					<Link href='https://discord.com/invite/XjNT9Y8'>
						<a target='_blank' className={styles.cta}>
							Discord
						</a>
					</Link>
					<Link href='https://smash.gg/tournament/brawlhalla-french-league-year-two/details'>
						<a
							target='_blank'
							className={`${styles.cta} ${styles.red}`}
						>
							Voir les tournois
						</a>
					</Link>
				</div>
			</nav>
		</header>
	);
};
