import { useEffect, useState } from 'react';

export const useScroll = () => {
	const [scroll, setScroll] = useState({ scrollX: 0, scrollY: 0 });

	useEffect(() => {
		const updateScroll = () => {
			const { scrollX, scrollY } = window;
			setScroll({ scrollX, scrollY });
		};

		window.addEventListener('scroll', updateScroll);

		return () => {
			window.removeEventListener('scroll', updateScroll);
		};
	}, []);

	return scroll;
};
