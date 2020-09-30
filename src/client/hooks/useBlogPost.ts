import { BlogPostEntry } from '../contentful';
import { useFetchData } from './useFetchData';

export const useBlogPost = (slug: string) => {
    return useFetchData<BlogPostEntry>(`/api/blog/${slug}`);
};
