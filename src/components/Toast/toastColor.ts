import { DefaultTheme } from 'styled-components'

import { ToastType } from '../../types/toast'

export function toastColor(
  theme: DefaultTheme,
  type: ToastType,
  light: boolean = false
): string {
  const colorKey = light ? 'lightest' : 'main'
  switch (type) {
    case 'error': {
      return theme.colors.secondary.red[colorKey]
    }
    case 'info': {
      return theme.colors.primary.blue[colorKey]
    }
    case 'success': {
      return theme.colors.secondary.green[colorKey]
    }
    case 'warning': {
      return theme.colors.secondary.orange[colorKey]
    }
    default: {
      return ''
    }
  }
}
