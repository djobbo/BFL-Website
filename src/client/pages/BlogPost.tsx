import React, { FC } from 'react';
import { MainLayout } from '../layout/MainLayout';

import { Redirect, useLocation } from 'react-router-dom';

import { ArticleWrapper, ArticleBanner, ArticleContent } from '../components/Article';
import { useBlogPost } from '../hooks/useBlogPost';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export const BlogPost: FC = () => {
    const { pathname } = useLocation();
    const [blogPost, loading, error] = useBlogPost(pathname.replace('/actus/', ''));

    return error ? (
        <>Une erreur est survenue.</>
    ) : loading ? (
        <MainLayout mainBackgroundImg="/assets/imgs/Background.jpg" activePage="news">
            loading
        </MainLayout>
    ) : blogPost ? (
        <MainLayout mainBackgroundImg={blogPost.fields.thumbnail.fields.file.url} activePage="news">
            <ArticleWrapper initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}>
                <ArticleBanner src={blogPost.fields.thumbnail.fields.file.url} />
                <ArticleContent className="markdown">
                    {documentToReactComponents(blogPost.fields.content)}
                </ArticleContent>
            </ArticleWrapper>
        </MainLayout>
    ) : (
        <Redirect to="/" />
    );
};
