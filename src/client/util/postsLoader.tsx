import PostsFiles from '../articles/**/*.md';

interface IPostFile {
    attributes: {
        title: string;
        slug: string;
        date: Date;
        desc: string;
        tags: string[];
        thumb: { source: string; alt: string };
        link: { href: string; target: string };
    };
    html: string;
}

interface IPost {
    title: string;
    slug: string;
    date: Date;
    desc: string;
    tags: string[];
    thumb: { source: string; alt: string };
    link: { href: string; target: string };
    dateFormat: string;
    permalink: string;
    html: string;
}

function formatPost({ attributes, html }: IPostFile): IPost {
    const date = new Date(attributes.date || '2020-01-01').toISOString();
    const dateFormat = date.substring(0, date.indexOf('T')).replace(/-/g, '/');
    return {
        ...attributes,
        dateFormat,
        permalink: `/actus/${dateFormat}/${attributes.slug}`,
        html,
    };
}
const sortPosts = (a: IPost, b: IPost) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0);

const Posts: IPost[] = PostsFiles.map(formatPost).sort(sortPosts);

const findPost = (permalink: string): IPost | undefined => Posts.find((post) => post.permalink === permalink);

export { Posts, IPost, findPost };
