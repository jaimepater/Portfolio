import React from 'react';
import './App.css';
import  { ThemeProvider } from 'styled-components';
import { GlobalStyle, Theme } from './Theme/Theme';
import Header from './Components/Header';
import ContentGradient from './Components/ContentGradient';
import Portfolio from './Containers/Portfolio/Portfolio';
import Experience from "./Containers/Portfolio/Experience/Experience";
import Skills from "./Containers/Portfolio/Skills/Skills";
import Projects from "./Containers/Portfolio/Projects/Projects";



const App = () => (
  <ThemeProvider theme={Theme}>
    <div className="App">
      <Header />
      <ContentGradient>
        <div>
          <Portfolio />
          <Experience />
          <Skills />
          <Projects />
        </div>
      </ContentGradient>
      <GlobalStyle />
    </div>
  </ThemeProvider>
);

export default App;
