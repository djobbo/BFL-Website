import React, { FC } from 'react';
import { MainLayout } from '../layout/MainLayout';
import { ErrorPage } from './ErrorPage';

import { findPost } from '../util/postsLoader';
import { useLocation } from 'react-router-dom';

import { ArticleWrapper, ArticleBanner, ArticleContent } from '../components/Article';

export const BlogPost: FC = () => {
    const { pathname } = useLocation();
    const post = findPost(pathname);

    return post ? (
        <MainLayout mainBackgroundImg={post.thumb.source} activePage="news">
            <ArticleWrapper initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}>
                <ArticleBanner src={post.thumb.source} />
                <ArticleContent className="markdown" dangerouslySetInnerHTML={{ __html: post.html }}></ArticleContent>
            </ArticleWrapper>
        </MainLayout>
    ) : (
        <ErrorPage />
    );
};
