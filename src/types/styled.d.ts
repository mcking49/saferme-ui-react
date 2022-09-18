import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: {
        darkBlue: {
          main: string;
          mainRGB: string;
          dark: string;
          darkRGB: string;
          medium: string;
          mediumRGB: string;
          lighter: string;
          lighterRGB: string;
          light: string;
          lightRGB: string;
          lightest: string;
          lightestRGB: string;
        },
        blue: {
          main: string;
          mainRGB: string;
          medium: string;
          mediumRGB: string;
          lighter: string;
          lighterRGB: string;
          light: string;
          lightRGB: string;
          lightest: string;
          lightestRGB: string;
        },
        blueTinted: {
          main: string;
          mainRGB: string;
        },
        white: {
          main: string;
          mainRGB: string;
          darkerRGB: string;
          mediumRGB: string;
          lighterRGB: string;
          lightRGB: string;
          lightestRGB: string;
        }
      },
      secondary: {
        grey: {
          main: string;
          mainRGB: string;
          lighter: string;
          lighterRGB: string;
          light: string;
          lightRGB: string;
          lightest: string;
          lightestRGB: string;
        },
        green: {
          main: string;
          mainRGB: string;
          medium: string;
          mediumRGB: string;
          lighter: string;
          lighterRGB: string;
          lightest: string;
          lightestRGB: string;
          bright: string;
          brightRGB: string;
        },
        red: {
          main: string;
          mainRGB: string;
          lighter: string;
          lighterRGB: string;
          light: string;
          lightRGB: string;
          lightest: string;
          lightestRGB: string;
          error: string;
          errorRGB: string;
        },
        orange: {
          main: string;
          mainRGB: string;
          lightest: string;
          lightestRGB: string;
        },
        darkOrange: {
          main: string;
          mainRGB: string;
          lightest: string;
          lightestRGB: string;
        },
      },
    },
  }
}
