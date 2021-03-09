type Image = { url: string };
type Content = { json: import('@contentful/rich-text-types').Document };

interface IPost {
	title: string;
	slug: string;
	thumbnail: Image;
	excerpt: string;
	content: Content;
	date: string;
	author: string;
}

interface IStructure {
	name: string;
	content: Content;
	logo: Image;
}
