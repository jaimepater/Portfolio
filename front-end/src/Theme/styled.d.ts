import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      blue1: string,
      white: string,
    }
  }
}
