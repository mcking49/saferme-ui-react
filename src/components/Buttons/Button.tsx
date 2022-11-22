import React, { FC } from 'react'
import styled, { css } from 'styled-components'

import { ButtonProps } from '../../types/button'

const primaryStyles = css`
  background: ${(props) => props.theme.colors.primary.blue.main};
  border-color: ${(props) => props.theme.colors.primary.blue.main};
  color: ${(props) => props.theme.colors.primary.white.main};

  &:hover {
    background: ${(props) => props.theme.colors.primary.blue.medium};
    border-color: ${(props) => props.theme.colors.primary.blue.medium};
  }

  &:active {
    background: ${(props) => props.theme.colors.primary.blueTinted.main};
    border-color: ${(props) => props.theme.colors.primary.blueTinted.main};
  }
`

const outlineStyles = css`
  background: ${(props) => props.theme.colors.primary.white.main};
  border-color: ${(props) => props.theme.colors.primary.blue.main};
  color: ${(props) => props.theme.colors.primary.blue.main};
  font-weight: 600;

  &:hover {
    background: ${(props) => props.theme.colors.primary.blue.lightest};
    border-color: ${(props) => props.theme.colors.primary.blue.main};
  }

  &:active {
    background: ${(props) => props.theme.colors.primary.blue.light};
    border-color: ${(props) => props.theme.colors.primary.blue.main};
  }
`

const StyledButton = styled.button<ButtonProps>`
  padding: 12px 24px;
  border-radius: 4px;
  border: 1px solid;
  border-color: transparent;
  background: none;

  &:hover {
    background: ${(props) => props.theme.colors.secondary.grey.light};
    border-color: ${(props) => props.theme.colors.secondary.grey.light};
  }

  &:active {
    background: ${(props) => props.theme.colors.secondary.grey.main};
    border-color: ${(props) => props.theme.colors.secondary.grey.main};
  }

  &:focus,
  &:focus-visible {
    box-shadow: ${(props) => props.theme.shadows.outline};
    outline: none;
  }

  /* Variants */
  ${(props) => {
    switch (props.variant) {
      case 'primary': {
        return primaryStyles
      }
      case 'outline': {
        return outlineStyles
      }
      default: {
        return
      }
    }
  }}
`

const Button: FC<ButtonProps> = ({
  children,
  variant = 'default',
  ...props
}) => {
  return (
    <StyledButton variant={variant} {...props}>
      {children}
    </StyledButton>
  )
}

export default Button
