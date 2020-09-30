import React, { FC } from 'react';
import { MainLayout } from '../layout/MainLayout';
import { ArticleContent } from '../components/Article';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { useStructures } from '../hooks/useStructures';

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

export const StructuresPage: FC = () => {
    const [structures, loading, error] = useStructures();
    console.log(process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN);
    console.log(structures, loading);

    return (
        <MainLayout mainBackgroundImg="/assets/imgs/Background.jpg" activePage="about">
            {error
                ? 'Une erreur est survenue.'
                : loading
                ? 'loading'
                : structures.map(({ fields: { name, content, logo } }, i) => (
                      <StructureWrapper
                          key={name}
                          initial={{ opacity: 0, y: 50 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.05 }}
                      >
                          <>
                              <StructureTitle>
                                  <StructureLogo src={logo.fields.file.url} />
                                  {name}
                              </StructureTitle>
                              <ArticleContent>
                                  <div className="markdown">{documentToReactComponents(content)}</div>
                              </ArticleContent>
                          </>
                      </StructureWrapper>
                  ))}
        </MainLayout>
    );
};
