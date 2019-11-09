import { css } from 'styled-components';
import Italianno from '../assets/Fonts/rageitalic/rageitalic.woff2';

export const FontFaces = css`
 @font-face {
  font-family: 'Italianno';
  font-style: normal;
  font-weight: 400;
  src: url(${Italianno}) format('woff2');
}

`;

export const FontSize = {
  xl: '50px',
  lg: '30px',
  md: '16px',
  sm: '14px',
  xs: '12px',
};
