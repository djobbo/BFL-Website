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
			</nav>
		</header>
	);
};
