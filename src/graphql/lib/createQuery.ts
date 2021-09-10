import { GraphQLClient } from 'graphql-request';
import { DocumentNode } from 'graphql';

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL);

export const createQuery = async <T, V>(
	query: DocumentNode,
	variables: V = null
): Promise<T> => {
	try {
		const data = await client.request<T>(query, variables);

		console.log({ data });
		return data;
	} catch (e) {
		console.error(e);
		throw e;
	}
};
