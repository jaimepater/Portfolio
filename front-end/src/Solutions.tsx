import React, { Suspense } from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Helmet } from 'react-helmet';
import { GlobalStyle, Theme } from './Theme/Theme';
import ContentGradient from './Components/ContentGradient';
import { getRoutes, RoutesPageTypes } from './Commons/Utils/getRoutes';
import SolutionsHeader from './Containers/Solutions/SolutionsHeader';
import SolutionsFooter from './Containers/Solutions/Solutionsfooter';
import logo from './assets/Images/logos/logo.png';

const SolutionsApp = () => (
  <ThemeProvider theme={Theme}>
    <div className="App">
      <Helmet>
        <title>JP Dev Solutions</title>
        <meta
          name="description"
          content="JP Dev Solutions offers software and hardware solutions including IoT Solutions, AI Tools Consultation, and Software Development."
        />
        <meta property="og:title" content="JP Dev Solutions" />
        <meta
          property="og:description"
          content="JP Dev Solutions offers software and hardware solutions"
        />
        <meta property="og:title" content="Como Subir Una Web a GitHub Pages" />
        <meta property="og:image" content={logo} />
        <meta property="og:url" content="https://jpdevsolutions.com/" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <SolutionsHeader />
          <ContentGradient>
            <Switch>
              {getRoutes(RoutesPageTypes.SOLUTIONS).map(route => (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={route.path}
                  component={route.component}
                />
              ))}
            </Switch>
            <SolutionsFooter />
          </ContentGradient>
        </Suspense>
      </Router>
      <GlobalStyle />
    </div>
  </ThemeProvider>
);

export default SolutionsApp;
