import GetHomeContent from './GetHomeContent.gql';
import { createQuery } from '@graphql/lib/createQuery';
import { BlogPost } from '../posts';

export interface HomePageContent {
	about: { html: string };
	results: { url: string }[];
	blogPosts: Omit<BlogPost, 'content'>[];
}

interface QueryResponse {
	homePages: HomePageContent[];
}

export const fetchHomeContent = async (): Promise<HomePageContent> => {
	const { homePages } = await createQuery<QueryResponse, {}>(GetHomeContent);

	const [homePage] = homePages;

	console.log({ homePage });

	return homePage;
};
