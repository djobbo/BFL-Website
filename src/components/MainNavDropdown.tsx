import styles from './MainNavDropdown.module.scss';
import mainNavStyles from './MainNav.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import React, { PropsWithChildren, useState } from 'react';
import { usePopper } from 'react-popper';
import { INavItem } from '../layout/navigation';
import Link from 'next/link';

interface Props {
	href: string;
	active?: boolean;
	subNav: INavItem[];
}

export function MainNavDropdown({
	href,
	children,
	active,
	subNav,
}: PropsWithChildren<Props>) {
	const [dropdownOpened, setDropdownOpened] = useState(false);
	const [referenceElement, setReferenceElement] = useState(null);
	const [popperElement, setPopperElement] = useState(null);
	const { styles: dropdownStyles, attributes } = usePopper(
		referenceElement,
		popperElement
	);

	return (
		<Link href={href}>
			<motion.a
				className={mainNavStyles.link}
				onMouseEnter={() => {
					setDropdownOpened(true);
				}}
				onMouseLeave={() => {
					setDropdownOpened(false);
				}}
				ref={setReferenceElement}
				style={dropdownStyles.arrow} // TODO: active/selected class
			>
				{children}
				<AnimatePresence>
					{dropdownOpened && (
						<motion.div
							className={styles.dropdown}
							ref={setPopperElement}
							style={dropdownStyles.popper}
							{...attributes.popper}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							initial={{ opacity: 0 }}
							transition={{ duration: 0.25 }}
						>
							{subNav.map((navItem, i) => (
								<Link key={i} href={navItem.link}>
									<a
										target={
											navItem.external ? '_blank' : null
										}
										className={mainNavStyles.link}
									>
										{navItem.title}
									</a>
								</Link>
							))}
						</motion.div>
					)}
				</AnimatePresence>
			</motion.a>
		</Link>
	);
}
