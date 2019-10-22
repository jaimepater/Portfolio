import React from 'react';
import './App.css';
import { inject, observer } from 'mobx-react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle, Theme } from './Theme/Theme';
import { ITestStore } from './Commons/Stores/TestStore';
import Header from './Componets/Header';
import ContentGradient from './Componets/ContentGradient';
import Portfolio from './Containers/Portfolio/Portfolio';
import { IProfileStore } from './Commons/Stores/ProfileStore';

interface AppProps {
  testStore? : ITestStore
  profileStore? : IProfileStore
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
      <GlobalStyle />
    </div>
  </ThemeProvider>
);

export default inject('testStore')(observer(App));
