import { BlogPostEntry } from '../contentful';
import { useFetchData } from './useFetchData';

export const useBlogPosts = () => {
    return useFetchData<BlogPostEntry[]>(`/api/blog`);
};
