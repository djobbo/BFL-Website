import styles from '@styles/pages/NewsPage.module.scss';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { MainLayout } from '@layout/MainLayout';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { BlogPost, fetchPosts } from '@graphql/queries/posts';
import { ArticlePreviewGroup } from '@components/ArticlePreviewGroup';
import { Container } from '@components/Container';

interface Props {
	blogPosts: BlogPost[];
}

export default function NewsPage({ blogPosts }: Props) {
	return (
		<>
			<Head>
				<title>Actus | BFL</title>
				<meta content='Actus | BFL' property='og:title' />
			</Head>
			<MainLayout mainBackgroundImg='/assets/imgs/Background.webp'>
				<Container>
					<h2>Actualités</h2>

					<ArticlePreviewGroup articles={blogPosts} />
				</Container>
			</MainLayout>
		</>
	);
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
	try {
		const blogPosts = await fetchPosts();

		console.log(blogPosts);

		return {
			props: { blogPosts },
		};
	} catch (e) {
		console.error(e);
		return {
			notFound: true,
		};
	}
};
