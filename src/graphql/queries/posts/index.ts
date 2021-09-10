import GetAllPosts from './GetAllPosts.gql';
import GetSinglePost from './GetSinglePost.gql';
import { createQuery } from '@graphql/lib/createQuery';

export interface BlogPost {
	title: string;
	slug: string;
	thumb: {
		url: string;
	};
	content: {
		html: string;
	};
	excerpt: {
		html: string;
	};
	publishedAt: string;
}

interface QueryResponse {
	blogPosts: BlogPost[];
}

export const fetchPosts = async (): Promise<BlogPost[]> => {
	const { blogPosts } = await createQuery<
		QueryResponse,
		{ first: number; skip: number }
	>(GetAllPosts, { first: 2, skip: 0 });

	console.log({ blogPosts });

	return blogPosts;
};

export const fetchSinglePost = async (
	slug: string
): Promise<BlogPost | undefined> => {
	const { blogPosts } = await createQuery<QueryResponse, { slug: string }>(
		GetSinglePost,
		{ slug }
	);

	const [blogPost] = blogPosts;

	console.log({ blogPost });

	return blogPost;
};
