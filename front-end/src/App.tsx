import React from 'react';
import './App.css';
import { inject, observer } from 'mobx-react';
import styled, { ThemeProvider } from 'styled-components';
import Theme from './Theme/Theme';
import { ITestStore } from './Commons/Stores/TestStore';
import logo from './logo.svg';
import Header from './Componets/Header';
import ContentGradient from './Componets/ContentGradient';
import Portfolio from "./Containers/Portfolio/Portfolio";

interface AppProps {
  testStore? : ITestStore
}
const App: React.FC<AppProps> = ({ testStore } : AppProps) => (
  <ThemeProvider theme={Theme}>
    <div className="App">
      <Header />
      <ContentGradient>
        <div>
          <Portfolio />
        </div>
      </ContentGradient>
    </div>
  </ThemeProvider>
);

export default inject('testStore')(observer(App));
