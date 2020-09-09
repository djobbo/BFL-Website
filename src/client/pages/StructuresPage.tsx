import React, { FC } from 'react';
import { MainLayout } from '../layout/MainLayout';
import { ArticleContent } from '../components/Article';
import data from '../static-content/structures/*.md';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StructureWrapper = styled(motion.div)`
    max-width: 1200px;
    margin: 0 auto 2rem auto;
    width: 100%;
    background-color: white;
`;

const StructureTitle = styled.h1`
    display: flex;
    align-items: center;
    color: #0a1f3c;
    padding: 1rem 1rem 0 1rem;
    width: 100%;
    font-size: 2rem;
    text-transform: uppercase;

    img {
        margin-right: 1rem;
    }
`;
const StructureLogo = styled(motion.img)`
    width: 4rem;
    height: 4rem;
    object-fit: contain;
`;

const PlayersContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
`;

export const StructuresPage: FC = () => {
    return (
        <MainLayout mainBackgroundImg="/assets/imgs/Background.jpg" activePage="about">
            {data.map(({ attributes, html }, i) => (
                <StructureWrapper
                    key={attributes.name}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                >
                    <>
                        <StructureTitle>
                            <StructureLogo src={`assets/imgs/Structures/${attributes.logo}`} />
                            {attributes.name}
                        </StructureTitle>
                        <ArticleContent>
                            <div className="markdown" dangerouslySetInnerHTML={{ __html: html }}></div>
                            <PlayersContainer>
                                {attributes.players?.map((player) => (
                                    <a key={player} href={player.link} rel="noreferrer" target="_blank">
                                        {player.name}
                                    </a>
                                ))}
                            </PlayersContainer>
                        </ArticleContent>
                    </>
                </StructureWrapper>
            ))}
        </MainLayout>
    );
};
