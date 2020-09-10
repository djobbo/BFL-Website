import { createClient } from 'contentful';
import { Entry, EntryFields, Asset } from 'contentful';
import { Document } from '@contentful/rich-text-types';

const client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

interface IStructure {
    name: EntryFields.Text;
    content: Document;
    logo: Asset;
}

export type StructureEntry = Entry<IStructure>;

export const getStructures = (): Promise<StructureEntry[]> =>
    client
        .getEntries<IStructure>({
            content_type: 'bflStructure',
            order: 'fields.name',
        })
        .then((res) => res.items);

interface IBlogPost {
    title: EntryFields.Text;
    slug: EntryFields.Text;
    thumbnail: Asset;
    excerpt: EntryFields.Text;
    content: Document;
    date: EntryFields.Date;
    author: EntryFields.Text;
}

export type BlogPostEntry = Entry<IBlogPost>;

export const getBlogPosts = (): Promise<BlogPostEntry[]> =>
    client
        .getEntries<IBlogPost>({
            content_type: 'bflBlogPost',
        })
        .then((res) => res.items);

export const getBlogPost = (slug: string): Promise<BlogPostEntry> =>
    client
        .getEntries<IBlogPost>({
            'fields.slug': slug,
            content_type: 'bflBlogPost',
        })
        .then((res) => res.items[0]);
