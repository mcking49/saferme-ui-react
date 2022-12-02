import React, { FC, PropsWithChildren } from 'react'
import styled from 'styled-components'

const ModalHeaderStyle = styled.h3``

const ModalHeader: FC<PropsWithChildren> = ({ children }) => {
  if (!children) {
    return null
  }

  return <ModalHeaderStyle>{children}</ModalHeaderStyle>
}

export default ModalHeader
