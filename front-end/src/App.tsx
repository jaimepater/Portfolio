import React from 'react';
import './App.css';
import  { ThemeProvider } from 'styled-components';
import { GlobalStyle, Theme } from './Theme/Theme';
import Header from './Components/Header';
import ContentGradient from './Components/ContentGradient';
import Portfolio from './Containers/Portfolio/Portfolio';
import Experience from "./Containers/Portfolio/Experience/Experience";



const App = () => (
  <ThemeProvider theme={Theme}>
    <div className="App">
      <Header />
      <ContentGradient>
        <div>
          <Portfolio />
          <Experience />
        </div>
      </ContentGradient>
      <GlobalStyle />
    </div>
  </ThemeProvider>
);

export default App;
