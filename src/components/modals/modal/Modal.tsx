import React, { FC, ReactNode } from 'react'
import ROModal from 'react-overlays/Modal'
import styled from 'styled-components'

import { Backdrop, ModalFooter, ModalHeader } from '.'

export interface ModalProps {
  children: ReactNode
  footer?: ReactNode
  isOpen: boolean
  title?: string
  onClose: () => void
}

const ModalBody = styled.div``

const ModalContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: space-between;
`

const ModalStyle = styled(ROModal)`
  background: ${(props) => props.theme.colors.primary.white.main};
  background-color: ${(props) => props.theme.colors.primary.white.main};
  position: fixed;
  z-index: 9999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 16px 18px;
  border-radius: 4px;
  box-shadow: ${(props) => props.theme.shadows.modal};
  min-width: 325px;
`

/**
 * TODO: convert component to one that is made up of "parts" using a combination of React.Context API and React Portals
 */
const Modal: FC<ModalProps> = ({
  children,
  footer,
  isOpen,
  title,
  onClose,
}) => {
  return (
    <ModalStyle
      show={isOpen}
      renderBackdrop={Backdrop}
      onBackdropClick={onClose}
      onHide={onClose}
    >
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>

        <ModalBody>{children}</ModalBody>

        <ModalFooter>{footer}</ModalFooter>
      </ModalContent>
    </ModalStyle>
  )
}

export default Modal
