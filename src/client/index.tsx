import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { history } from './history';

import { ThemeProvider } from './providers/ThemeProvider';

import { App } from './App';

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Router history={history}>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </Router>,
    rootElement,
);
