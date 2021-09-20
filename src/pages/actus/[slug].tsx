import articleStyles from '@styles/Article.module.scss';
import markdownStyles from '@styles/markdown.module.scss';
import { MainLayout } from '@layout/MainLayout';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { BlogPost, fetchSinglePost } from '@graphql/queries/posts';
import { Container } from '@components/Container';

interface Props {
	blogPost: BlogPost;
}

export default function BlogPostPage({
	blogPost: { title, thumb, content },
}: Props) {
	return (
		<>
			<Head>
				<title>{title} | Brawlhalla French Lobby</title>
				<meta
					content={`${title} | Brawlhalla French Lobby`}
					property='og:title'
				/>
			</Head>
			<MainLayout mainBackgroundImg={thumb.url}>
				<div className={markdownStyles.markdown}>
					<Container>
						<div
							dangerouslySetInnerHTML={{ __html: content.html }}
						/>
					</Container>
				</div>
			</MainLayout>
		</>
	);
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
	params: { slug },
}) => {
	try {
		if (Array.isArray(slug)) throw new Error('Bad slug format');

		const blogPost = await fetchSinglePost(slug);

		console.log(blogPost);

		return {
			props: { blogPost },
		};
	} catch (e) {
		console.error(e);
		return {
			notFound: true,
		};
	}
};
