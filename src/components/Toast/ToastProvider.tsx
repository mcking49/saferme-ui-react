import React from 'react'
import { useToaster } from 'react-hot-toast'
import styled from 'styled-components'

import { ToastContainer } from './ToastContainer'

const ToastProviderWrapper = styled.div`
  position: fixed;
  z-index: ${(props) => props.theme.zIndex.toast};
  inset: 16px;
  pointer-events: none;
`

export const ToastProvider = () => {
  const { toasts } = useToaster()

  return (
    <ToastProviderWrapper>
      {toasts.map((t) => (
        <ToastContainer t={t} key={t.id} />
      ))}
    </ToastProviderWrapper>
  )
}
