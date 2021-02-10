import styles from '../../styles/pages/NewsPage.module.scss';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { MainLayout } from '../../layout/MainLayout';
import { initializeApollo } from '../../util/apollo';
import { gql } from '@apollo/client';
import { GetServerSideProps } from 'next';

interface Props {
	blogPosts: any[]; //TODO: ANY
}

export default function NewsPage({ blogPosts }: Props) {
	return (
		<MainLayout
			mainBackgroundImg='/assets/imgs/Background.jpg'
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
									<div>
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
									</div>
									<p className={styles.date}>{date}</p>
								</motion.div>
							)
						);
					}
				)}
			</div>
		</MainLayout>
	);
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
	const apolloClient = initializeApollo();

	const res = await apolloClient.query({
		query: gql`
			query getAllPosts($limit: Int!, $skip: Int!) {
				bflBlogPostCollection(limit: $limit, skip: $skip) {
					items {
						title
						slug
						thumbnail {
							url
						}
						excerpt
						content {
							json
						}
						date
						author
					}
				}
			}
		`,
		variables: {
			skip: 0,
			limit: 5,
		},
	});

	console.log(res);
	console.log(res.data.bflBlogPostCollection.items);

	return {
		props: { blogPosts: res.data?.bflBlogPostCollection?.items ?? [] },
	};
};
