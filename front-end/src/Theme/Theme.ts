import { DefaultTheme, createGlobalStyle } from 'styled-components';

import Palette from './Palette';
import { FontFaces, FontSize, Mexcellent, Typewriter } from './Fonts';

export const Theme: DefaultTheme = {
  palette: Palette,
  fontSize: FontSize,
};

export const GlobalStyle = createGlobalStyle`
${FontFaces}
${Mexcellent}
${Typewriter}
`;

