import { css } from 'styled-components';
import Italianno from '../assets/Fonts/rageitalic/rageitalic.woff2';
import mexcellent from '../assets/Fonts/Mexcellent3D-Regular/mexcellent3d.woff2';
import typewriter from '../assets/Fonts/Typewriter/KingthingsTrypewriter2.woff2';

export const FontFaces = css`
  @font-face {
    font-family: 'Italianno';
    font-style: normal;
    font-weight: 400;
    src: url(${Italianno}) format('woff2');
  }
`;

export const Mexcellent = css`
  @font-face {
    font-family: 'mexcellent';
    font-style: normal;
    font-weight: 400;
    src: url(${mexcellent}) format('woff2');
  }
`;
export const Typewriter = css`
  @font-face {
    font-family: 'typewriter';
    font-style: normal;
    font-weight: 400;
    src: url(${typewriter}) format('woff2');
  }
`;
export const FontSize = {
  xl: '50px',
  lg: '30px',
  md: '20px',
  sm: '16px',
  xs: '14px'
};
