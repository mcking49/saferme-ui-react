import React, { FC } from 'react'
import styled from 'styled-components'

import { ButtonProps } from '../../types/button'

const StyledButton = styled.button<ButtonProps>`
  padding: 12px 24px;
  border-radius: 4px;
  border: none;
  background: none;

  &:focus,
  &:focus-visible {
    box-shadow: ${(props) => props.theme.shadows.outline};
    outline: none;
  }

  &:hover {
    background: ${(props) => props.theme.colors.secondary.grey.light};
  }
`

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>
}

export default Button
