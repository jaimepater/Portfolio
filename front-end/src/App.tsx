import React, { Suspense } from 'react';

import './App.css';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalStyle, Theme } from './Theme/Theme';
import Header from './Components/Header';
import ContentGradient from './Components/ContentGradient';
import Footer from './Components/Footer';
import { getRoutes } from './Commons/Utils/getRoutes';

const App = () => (
  <ThemeProvider theme={Theme}>
    <div className="App">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <ContentGradient>
            <Switch>
              {getRoutes().map(route => (
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

export default App;
