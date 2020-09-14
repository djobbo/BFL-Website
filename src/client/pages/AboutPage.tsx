import React, { FC } from 'react';
import { MainLayout } from '../layout/MainLayout';
import { ArticleWrapper, ArticleContent } from '../components/Article';
import data from '../static-content/a-propos.md';

export const AboutPage: FC = () => {
    return (
        <MainLayout mainBackgroundImg="/assets/imgs/Background.jpg" activePage="about">
            <ArticleWrapper initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}>
                <ArticleContent>
                    <div className="markdown" dangerouslySetInnerHTML={{ __html: data.html }}></div>
                </ArticleContent>
            </ArticleWrapper>
        </MainLayout>
    );
};
