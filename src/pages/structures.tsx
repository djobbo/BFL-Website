import styles from '../styles/pages/StructuresPage.module.scss';
import markdownStyles from '../styles/markdown.module.scss';
import articleStyles from '../styles/Article.module.scss';
import { MainLayout } from '../layout/MainLayout';
import { motion } from 'framer-motion';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { gql } from '@apollo/client';
import { GetServerSideProps } from 'next';
import { initializeApollo } from '../util/apollo';
import Head from 'next/head';

interface Props {
	structures: any[]; //TODO: ANY
}

export default function StructuresPage({ structures }: Props) {
	return (
		<>
			<Head>
				<title>Structures | BFL</title>
			</Head>
			<MainLayout
				mainBackgroundImg='/assets/imgs/Background.jpg'
				activePage='about'
			>
				{structures.map(({ name, content, logo }, i) => (
					<motion.div
						className={styles.structure}
						key={name}
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: i * 0.05 }}
					>
						<div className={articleStyles.article}>
							<h1 className={styles.title}>
								<img className={styles.logo} src={logo.url} />
								{name}
							</h1>
							<div className={markdownStyles.markdown}>
								{documentToReactComponents(content.json)}
							</div>
						</div>
					</motion.div>
				))}
			</MainLayout>
		</>
	);
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
	try {
		const apolloClient = initializeApollo();

		const res = await apolloClient.query({
			query: gql`
				query getAllStructures {
					bflStructureCollection {
						items {
							name
							logo {
								url
							}
							content {
								json
							}
						}
					}
				}
			`,
			variables: {
				skip: 0,
			},
		});

		return {
			props: {
				structures: res.data?.bflStructureCollection?.items ?? [],
			},
		};
	} catch (e) {
		return {
			notFound: true,
		};
	}
};
