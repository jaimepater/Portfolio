import React, { Suspense } from 'react';

import './App.css';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Helmet } from 'react-helmet';
import { GlobalStyle, Theme } from './Theme/Theme';
import Header from './Components/Header';
import ContentGradient from './Components/ContentGradient';
import Footer from './Components/Footer';
import { getRoutes, RoutesPageTypes } from './Commons/Utils/getRoutes';
import logo from './assets/Images/logos/logo.png';

const PortfolioApp = () => (
  <ThemeProvider theme={Theme}>
    <div className="App">
      <Helmet>
        <title>Jaime Paternina Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Jaime Paternina showcasing skills, projects, and experience."
        />

        <meta property="og:title" content="Jaime Paternina's Portfolio" />
        <meta
          property="og:description"
          content="Portfolio of Jaime Paternina showcasing skills, projects, and experience."
        />
        <meta property="og:image" content={logo} />
        <meta property="og:url" content="https://jaime-portfolio.com/" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <ContentGradient>
            <Switch>
              {getRoutes(RoutesPageTypes.PORTFOLIO).map(route => (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={route.path}
                  component={route.component}
                />
              ))}
            </Switch>
            <Footer />
          </ContentGradient>
        </Suspense>
      </Router>
      <GlobalStyle />
    </div>
  </ThemeProvider>
);

export default PortfolioApp;
