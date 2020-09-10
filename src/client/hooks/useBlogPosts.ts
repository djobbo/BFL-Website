import { useEffect, useState } from 'react';

import { getBlogPosts, getBlogPost, BlogPostEntry } from '../contentful';

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

export const useBlogPost = (slug: string): [BlogPostEntry, boolean] => {
    const [blogPost, setBlogPost] = useState<BlogPostEntry>();
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        getBlogPost(slug).then((data) => {
            setBlogPost(data);
            setLoading(false);
        });
    }, []);

    return [blogPost, isLoading];
};
