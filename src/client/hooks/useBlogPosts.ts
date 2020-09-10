import { useEffect, useState } from 'react';
import { getBlogPosts, BlogPostEntry } from '../contentful';

export const useBlogPosts = (): [BlogPostEntry[], boolean] => {
    const [blogPosts, setBlogPosts] = useState<BlogPostEntry[]>([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        getBlogPosts().then((data) => {
            setBlogPosts(data);
            setLoading(false);
        });
    }, []);

    return [blogPosts, isLoading];
};
