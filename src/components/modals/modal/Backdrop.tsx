import React, { FC } from 'react'
import { RenderModalBackdropProps } from 'react-overlays/Modal'
import styled from 'styled-components'

const BackdropStyle = styled.div<RenderModalBackdropProps>`
  position: fixed;
  z-index: 999;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: ${(props) => props.theme.colors.primary.darkBlue.lightRGB};
`

const Backdrop: FC<RenderModalBackdropProps> = (props) => (
  <BackdropStyle {...props} />
)

export default Backdrop
