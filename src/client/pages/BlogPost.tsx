import React, { FC } from 'react';
import { MainLayout } from '../layout/MainLayout';
import { ErrorPage } from './ErrorPage';

import styled from 'styled-components';
import { findPost } from '../util/postsLoader';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const ArticleBanner = styled.img`
    z-index: -10;
    top: 0;
    width: 100%;
    height: 16rem;
    margin-bottom: 1rem;
    object-fit: cover;
    object-position: center;
`;

const ArticleWrapper = styled(motion.div)`
    max-width: 1200px;
    margin: 0 auto;
    background-color: white;
`;

const ArticleContent = styled.div`
    color: black;
    padding: 1rem;
`;

export const BlogPost: FC = () => {
    const { pathname } = useLocation();
    const post = findPost(pathname);

    return post ? (
        <MainLayout mainBackgroundImg={post.thumb.source} activePage="news">
            <ArticleWrapper initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}>
                <ArticleBanner src={post.thumb.source} />
                <ArticleContent>
                    <div className="markdown" dangerouslySetInnerHTML={{ __html: post.html }}></div>
                </ArticleContent>
            </ArticleWrapper>
        </MainLayout>
    ) : (
        <ErrorPage />
    );
};
