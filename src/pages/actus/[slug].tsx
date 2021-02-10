import { motion } from 'framer-motion';
import articleStyles from '../../styles/Article.module.scss';
import { MainLayout } from '../../layout/MainLayout';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { initializeApollo } from '../../util/apollo';
import { gql } from '@apollo/client';
import { GetServerSideProps } from 'next';

interface Props {
	blogPost: any; //TODO: ANY
}

export default function BlogPost({ blogPost }: Props) {
	return (
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
				<div className={`${articleStyles.content} markdown`}>
					{documentToReactComponents(blogPost.content.json)}
				</div>
			</motion.div>
		</MainLayout>
	);
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
	params: { slug },
}) => {
	const apolloClient = initializeApollo();

	const res = await apolloClient.query({
		query: gql`
			query getPost($slug: String!) {
				bflBlogPostCollection(where: { slug: $slug }) {
					items {
						title
						slug
						thumbnail {
							url
						}
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
};
