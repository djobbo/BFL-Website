import React from 'react';

import { IndexPage } from './pages/IndexPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { NewsPage } from './pages/NewsPage';
import { BlogPost } from './pages/BlogPost';

interface IRoute {
    path: string;
    exact?: boolean;
    RouteComponent: React.ReactNode;
}

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
];
