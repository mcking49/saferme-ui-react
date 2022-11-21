import React from 'react'

import Theme from './Theme'

const THEME_DECORATOR = (Story: React.FC) => (
  <Theme>
    <Story />
  </Theme>
)

export const DECORATORS = [THEME_DECORATOR]
