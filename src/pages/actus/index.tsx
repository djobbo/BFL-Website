import styles from '../../styles/pages/NewsPage.module.scss';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { MainLayout } from '../../layout/MainLayout';
import { initializeApollo } from '../../util/apollo';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

import GET_ALL_POSTS from '../../graphql/GetAllPostsQuery.gql';

interface Props {
	blogPosts: IPost[];
}

export default function NewsPage({ blogPosts }: Props) {
	return (
		<>
			<Head>
				<title>Actus | BFL</title>
				<meta content='Actus | BFL' property='og:title' />
			</Head>
			<MainLayout
				mainBackgroundImg='/assets/imgs/Background.webp'
				activePage='news'
			>
				<h1>Actualités</h1>
				<div className={styles.postsContainer}>
					{blogPosts.map(
						(
							{
								title,
								slug,
								thumbnail,
								excerpt,
								content,
								date,
								author,
							},
							i
						) => {
							const permalink = `/actus/${slug}`;
							return (
								i < 5 && (
									<motion.div
										className={styles.post}
										key={slug}
										initial={{ opacity: 0, y: 50 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: i * 0.05 }}
									>
										<Link href={permalink}>
											<img
												className={styles.thumb}
												src={thumbnail.url}
												alt={slug}
											/>
										</Link>
										<div className={styles.content}>
											<Link href={permalink}>
												<a className={styles.title}>
													{title}
												</a>
											</Link>
											<p className={styles.desc}>
												{excerpt}
											</p>
										</div>
										<p className={styles.date}>{date}</p>
									</motion.div>
								)
							);
						}
					)}
				</div>
			</MainLayout>
		</>
	);
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
	try {
		const apolloClient = initializeApollo();

		const res = await apolloClient.query({
			query: GET_ALL_POSTS,
			variables: {
				skip: 0,
				limit: 5,
			},
		});

		return {
			props: { blogPosts: res.data?.bflBlogPostCollection?.items ?? [] },
		};
	} catch (e) {
		// console.log(e?.networkError?.statusCode);

		return {
			notFound: true,
		};
	}
};
