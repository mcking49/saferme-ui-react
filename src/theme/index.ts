import { DefaultTheme } from "styled-components";

// Primary colors
const primaryBlue = (opacity: number = 1) => `rgba(1, 132, 181, ${opacity})`
const primaryBlueTinted = (opacity: number = 1) => `rgba(1, 112, 153, ${opacity})`
const primaryDarkBlue = (opacity: number = 1) => `rgba(37, 64, 78, ${opacity})`
const primaryWhite = (opacity: number = 1) => `rgba(255, 255, 255, ${opacity})`

// Secondary colors
const secondaryDarkOrange = (opacity: number = 1) => `rgba(244, 102, 31, ${opacity})`
const secondaryGreen = (opacity: number = 1) => `rgba(7, 166, 153, ${opacity})`
const secondaryGrey = (opacity: number = 0.15) => primaryDarkBlue(opacity)
const secondaryOrange = (opacity: number = 1) => `rgba(244, 155, 32, ${opacity})`
const secondaryRed = (opacity: number = 1) => `rgba(247, 84, 83, ${opacity})`

export const THEME: DefaultTheme = {
  colors: {
    primary: {
      blue: {
        light: '#D9EDF4',
        lightRGB: primaryBlue(0.15),
        lighter: '#8DC8DE',
        lighterRGB: primaryBlue(0.45),
        lightest: '#F2F9FB',
        lightestRGB: primaryBlue(0.05),
        main: '#0184B5',
        mainRGB: primaryBlue(),
        medium: '#349DC4',
        mediumRGB: primaryBlue(0.8),
      },
      blueTinted: {
        main: '#017099',
        mainRGB: primaryBlueTinted(),
      },
      darkBlue: {
        dark: '#3B5360',
        darkRGB: primaryDarkBlue(0.9),
        light: '#9DA9AF',
        lightRGB: primaryDarkBlue(0.45),
        lighter: '#667983',
        lighterRGB: primaryDarkBlue(0.7),
        lightest: '#E9ECED',
        lightestRGB: primaryDarkBlue(0.1),
        main: '#25404E',
        mainRGB: primaryDarkBlue(),
        medium: '#516671',
        mediumRGB: primaryDarkBlue(0.8),
      },
      white: {
        darkerRGB: primaryWhite(0.85),
        lighterRGB: primaryWhite(0.45),
        lightestRGB: primaryWhite(0.05),
        lightRGB: primaryWhite(0.15),
        main: '#FFFFFF',
        mainRGB: primaryWhite(),
        mediumRGB: primaryWhite(0.7),
      },
    },
    secondary: {
      darkOrange: {
        lightest: '#FDF0DE',
        lightestRGB: secondaryDarkOrange(0.15),
        main: '#F49B20',
        mainRGB: secondaryDarkOrange()
      },
      green: {
        bright: '#18A45A',
        brightRGB: 'rgba(24, 164, 90, 1)',
        lighter: '#8FD7D1',
        lighterRGB: secondaryGreen(0.45),
        lightest: '#E6F6F5',
        lightestRGB: secondaryGreen(0.1),
        main: '#07A699',
        mainRGB: secondaryGreen(),
        medium: '#51C1B8',
        mediumRGB: secondaryGreen(0.7),
      },
      grey: {
        light: '#F4F5F6',
        lightRGB: secondaryGrey(0.05),
        lighter: '#E9ECED',
        lighterRGB: secondaryGrey(0.1),
        lightest: '#F8F9FA',
        lightestRGB: secondaryGrey(0.03),
        main: '#DFE3E5',
        mainRGB: secondaryGrey(),
      },
      orange: {
        lightest: '#FDF0DE',
        lightestRGB: secondaryOrange(0.15),
        main: '#F49B20',
        mainRGB: secondaryOrange(),
      },
      red: {
        error: '#E02C2A',
        errorRGB: 'rgba(224, 44, 42, 1)',
        light: '#FBB2B2',
        lightRGB: secondaryRed(0.45),
        lighter: '#F98787',
        lighterRGB: secondaryRed(0.7),
        lightest: '#FEE5E5',
        lightestRGB: secondaryRed(0.15),
        main: '#F75453',
        mainRGB: secondaryRed()
      },
    },
  },
}
