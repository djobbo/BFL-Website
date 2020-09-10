import { useEffect, useState } from 'react';
import { getBlogPost, BlogPostEntry } from '../contentful';

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
