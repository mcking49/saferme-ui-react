import React from 'react'

import SaferMeUIProvider from '../components/SaferMeUIProvider'

const THEME_DECORATOR = (Story: React.FC) => (
  <SaferMeUIProvider>
    <Story />
  </SaferMeUIProvider>
)

export const DECORATORS = [THEME_DECORATOR]
