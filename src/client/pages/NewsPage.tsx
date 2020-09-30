import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { MainLayout } from '../layout/MainLayout';
import styled from 'styled-components';
import { useBlogPosts } from '../hooks/useBlogPosts';

const PostsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    margin: 0 auto;
    max-width: 1200px;
    width: 100%;
`;

const Article = styled(motion.article)`
    background-color: white;
    overflow: hidden;
    margin: 0.5rem;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const ArticleContent = styled.div`
    margin: 0.5rem 1rem;
`;

const ArticleTitle = styled(NavLink)`
    font-size: 1.5rem;
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: black;

    &:hover {
        color: #ec424d;
    }
`;

const ArticleThumb = styled.img`
    width: 100%;
    max-height: 10rem;
    object-fit: cover;
    object-position: center;
    overflow: hidden;
    transition: 0.2s transform ease;

    &:hover {
        transform: scale(1.05);
    }
`;

const ArticleDesc = styled.p`
    line-height: 1.5rem;
`;

const ArticleDate = styled.p`
    padding: 0 1rem 0.5rem 0;
    font-size: 0.875rem;
    font-style: italic;
    text-align: right;
    opacity: 0.72;
`;

export const NewsPage: FC = () => {
    const [blogPosts, loading, error] = useBlogPosts();
    return (
        <MainLayout mainBackgroundImg="/assets/imgs/Background.jpg" activePage="news">
            <h1>Actualités</h1>
            {error ? (
                'Une erreur est survenue.'
            ) : loading ? (
                'loading'
            ) : (
                <PostsContainer>
                    {blogPosts.map(({ fields: { title, slug, thumbnail, excerpt, content, date, author } }, i) => {
                        const permalink = `/actus/${slug}`;
                        return (
                            i < 5 && (
                                <Article
                                    key={slug}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <div>
                                        <NavLink to={permalink}>
                                            <ArticleThumb src={thumbnail.fields.file.url} alt={slug} />
                                        </NavLink>
                                        <ArticleContent>
                                            <ArticleTitle to={permalink}>{title}</ArticleTitle>
                                            <ArticleDesc>bruh{excerpt}</ArticleDesc>
                                        </ArticleContent>
                                    </div>
                                    <ArticleDate>{date}</ArticleDate>
                                </Article>
                            )
                        );
                    })}
                </PostsContainer>
            )}
        </MainLayout>
    );
};
