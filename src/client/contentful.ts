import { Entry, EntryFields, Asset } from 'contentful';
import { Document } from '@contentful/rich-text-types';

interface IStructure {
    name: EntryFields.Text;
    content: Document;
    logo: Asset;
}

export type StructureEntry = Entry<IStructure>;

export const getStructures = (): Promise<StructureEntry[]> => fetch('/structures').then((res) => res.json());

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

export const getBlogPosts = (): Promise<BlogPostEntry[]> => fetch('/blog').then((res) => res.json());

export const getBlogPost = (slug: string): Promise<BlogPostEntry> => fetch(`/blog/${slug}`).then((res) => res.json());
