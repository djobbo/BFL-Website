import { motion } from 'framer-motion';
import articleStyles from '../../styles/Article.module.scss';
import markdownStyles from '../../styles/markdown.module.scss';
import { MainLayout } from '../../layout/MainLayout';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { initializeApollo } from '../../util/apollo';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

import GET_POST from '../../graphql/GetPostQuery.gql';

interface Props {
	blogPost: IPost;
}

export default function BlogPost({ blogPost }: Props) {
	return (
		<>
			<Head>
				<title>{blogPost.title} | BFL</title>
				<meta content={`${blogPost.title} | BFL`} property='og:title' />
			</Head>
			<MainLayout
				mainBackgroundImg={blogPost.thumbnail.url}
				activePage='news'
			>
				<motion.div
					className={articleStyles.article}
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
				>
					<img
						className={articleStyles.banner}
						src={blogPost.thumbnail.url}
					/>
					<div className={markdownStyles.markdown}>
						{documentToReactComponents(blogPost.content.json)}
					</div>
				</motion.div>
			</MainLayout>
		</>
	);
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
	params: { slug },
}) => {
	try {
		const apolloClient = initializeApollo();

		const res = await apolloClient.query({
			query: GET_POST,
			variables: {
				slug,
			},
		});

		const blogPost = res.data?.bflBlogPostCollection?.items;

		if (!blogPost?.length || blogPost.length <= 0)
			return {
				notFound: true,
			};

		return {
			props: { blogPost: res.data?.bflBlogPostCollection?.items[0] },
		};
	} catch (e) {
		return {
			notFound: true,
		};
	}
};
