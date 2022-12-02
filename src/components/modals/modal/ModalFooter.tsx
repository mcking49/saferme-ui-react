import React, { FC, PropsWithChildren } from 'react'
import styled from 'styled-components'

const ModalFooterStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 18px;
`

const ModalFooter: FC<PropsWithChildren> = ({ children }) => {
  if (!children) {
    return null
  }

  return <ModalFooterStyle>{children}</ModalFooterStyle>
}

export default ModalFooter
