import React from 'react'

import { GlobalStyle } from '../theme'

import Theme from './Theme'

const THEME_DECORATOR = (Story: React.FC) => (
  <Theme>
    <GlobalStyle />
    <Story />
  </Theme>
)

export const DECORATORS = [THEME_DECORATOR]
