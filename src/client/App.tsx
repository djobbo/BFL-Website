import React, { useContext, CSSProperties, FC } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

import { ThemeContext, themeModes } from './providers/ThemeProvider';
import { routes } from './routes';
import { ErrorPage } from './pages/ErrorPage';

const AppWrapper = styled.div``;

export const App: FC = () => {
    const location = useLocation();
    const { themeMode } = useContext(ThemeContext);

    return (
        <AppWrapper id="App" style={themeModes[themeMode] as CSSProperties}>
            <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                    {routes.map(({ path, exact, RouteComponent }) => (
                        <Route path={path} exact={exact} key={path}>
                            <RouteComponent />
                        </Route>
                    ))}
                    <Route path="/">
                        <ErrorPage />
                    </Route>
                </Switch>
            </AnimatePresence>
        </AppWrapper>
    );
};
