import React, { FC, useEffect } from 'react';

import { IndexPage } from './pages/IndexPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { NewsPage } from './pages/NewsPage';
import { BlogPost } from './pages/BlogPost';
import { StructuresPage } from './pages/StructuresPage';

interface IRoute {
    path: string;
    exact?: boolean;
    RouteComponent: FC;
}

const ExternalLinkRedirect: FC = () => {
    useEffect(() => {
        console.log(window.location.hash.substr(1));
        window.location.href = window.location.hash.substr(1);
    }, []);
    return (
        <div>
            <h1>Hello</h1>
        </div>
    );
};

export const routes: IRoute[] = [
    {
        path: '/',
        exact: true,
        RouteComponent: IndexPage,
    },
    {
        path: '/about',
        exact: true,
        RouteComponent: AboutPage,
    },
    {
        path: '/contact',
        exact: true,
        RouteComponent: ContactPage,
    },
    {
        path: '/actus',
        exact: true,
        RouteComponent: NewsPage,
    },
    {
        path: '/actus',
        RouteComponent: BlogPost,
    },
    {
        path: '/structures',
        RouteComponent: StructuresPage,
    },
    {
        path: '/redirect',
        RouteComponent: ExternalLinkRedirect,
    },
    {
        path: '/',
        RouteComponent: IndexPage,
    },
];
