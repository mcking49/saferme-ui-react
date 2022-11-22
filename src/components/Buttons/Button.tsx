import React, { FC } from 'react'
import styled, { css } from 'styled-components'

import { ButtonProps, COLOR_SCHEME_MAP } from '../../types/button'

const primaryStyles = css<ButtonProps>`
  background: ${(props) => props.theme.colors.primary.blue.main};
  border-color: ${(props) => props.theme.colors.primary.blue.main};
  color: ${(props) => props.theme.colors.primary.white.main};

  &:hover {
    background: ${(props) => props.theme.colors.primary.blue.medium};
    border-color: ${(props) => props.theme.colors.primary.blue.medium};
  }

  &:active {
    background: ${(props) => props.theme.colors.primary.blue};
    border-color: ${(props) => props.theme.colors.primary.blue};
  }

  /* ColorScheme overrides */
  ${(props) => {
    if (props.colorScheme) {
      return css`
        background: ${COLOR_SCHEME_MAP[props.colorScheme]};
        border-color: ${COLOR_SCHEME_MAP[props.colorScheme]};

        &:hover {
          background: ${COLOR_SCHEME_MAP[props.colorScheme]};
          border-color: ${COLOR_SCHEME_MAP[props.colorScheme]};
        }

        &:active {
          background: ${COLOR_SCHEME_MAP[props.colorScheme]};
          border-color: ${COLOR_SCHEME_MAP[props.colorScheme]};
        }
      `
    }
  }}

  &:disabled {
    background: ${(props) => props.theme.colors.primary.darkBlue.lightest};
    border-color: ${(props) => props.theme.colors.primary.darkBlue.lightest};
    color: ${(props) => props.theme.colors.primary.darkBlue.medium};
  }
`

const outlineStyles = css<ButtonProps>`
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

  /* ColorScheme overrides */
  ${(props) => {
    if (props.colorScheme) {
      return css`
        border-color: ${COLOR_SCHEME_MAP[props.colorScheme]};
        color: ${COLOR_SCHEME_MAP[props.colorScheme]};

        &:hover {
          border-color: ${COLOR_SCHEME_MAP[props.colorScheme]};
          background: ${(props) => props.theme.colors.primary.white.main};
        }

        &:active {
          border-color: ${COLOR_SCHEME_MAP[props.colorScheme]};
          background: ${(props) => props.theme.colors.primary.white.main};
        }
      `
    }
  }}

  &:disabled {
    background: ${(props) => props.theme.colors.primary.white.main};
    border-color: ${(props) => props.theme.colors.primary.darkBlue.light};
    color: ${(props) => props.theme.colors.primary.darkBlue.light};
  }
`

const plainStyles = css<ButtonProps>`
  background: transparent;
  border-color: transparent;
  color: ${(props) => props.theme.colors.primary.blue.main};
  font-weight: 600;
  padding-left: 0;
  padding-right: 0;
  text-transform: capitalize;

  &:hover {
    background: transparent;
    border-color: transparent;
    text-decoration: underline;
  }

  &:active {
    background: ${(props) => props.theme.colors.primary.blue.light};
    border-color: ${(props) => props.theme.colors.primary.blue.light};
  }

  /* ColorScheme overrides */
  ${(props) => {
    if (props.colorScheme) {
      return css`
        color: ${COLOR_SCHEME_MAP[props.colorScheme]};

        &:active {
          background: ${(props) => props.theme.colors.primary.white.main};
          border-color: ${(props) => props.theme.colors.primary.white.main};
        }
      `
    }
  }}

  &:disabled {
    background: transparent;
    border-color: transparent;
    color: ${(props) => props.theme.colors.primary.darkBlue.light};
    text-decoration: none;
  }
`

const StyledButton = styled.button<ButtonProps>`
  padding: 12px 24px;
  border-radius: 4px;
  border: 1px solid;
  background: none;
  border-color: transparent;

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

  &:disabled {
    cursor: not-allowed;
    background: none;
    border-color: transparent;
    box-shadow: none;
    color: ${(props) => props.theme.colors.primary.darkBlue.medium};
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
      case 'plain': {
        return plainStyles
      }
      default: {
        return
      }
    }
  }}
`

const Button: FC<ButtonProps> = ({
  children,
  iconLeft,
  iconRight,
  variant = 'default',
  ...props
}) => {
  return (
    <StyledButton variant={variant} {...props}>
      {iconLeft}
      {children}
      {iconRight}
    </StyledButton>
  )
}

export default Button
