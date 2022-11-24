import React from 'react'

import { GlobalStyle } from '../theme'
import Theme from '../utils/Theme'

import { ToastProvider } from './toast/ToastProvider'

const SaferMeUIProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Theme>
      <GlobalStyle />
      {children}
      <ToastProvider />
    </Theme>
  )
}

export default SaferMeUIProvider
