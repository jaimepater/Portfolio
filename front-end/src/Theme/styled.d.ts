import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      blue1: string,
      white: string,
      gray1: string,
      gray2: string,
      gray3: string,
      gray4: string,
    }
    fontSize: {
      xl: string,
      lg: string,
      md: string,
      sm: string,
      xs: string,
    }
  }
}
