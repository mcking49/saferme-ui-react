import React, { ReactNode } from 'react'
import styled, { css } from 'styled-components'

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  isInvalid?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}

const InputStyle = styled.input<InputProps>`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: ${(props) => (props.leftIcon ? 44 : 16)}px;
  padding-right: ${(props) => (props.rightIcon ? 44 : 16)}px;
  background: ${(props) => props.theme.colors.secondary.grey.light};
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.secondary.grey.main};
  border-radius: 4px;
  transition: all 0.2s ease;
  outline: none;
  width: 100%;
  position: relative;

  &::placeholder {
    color: ${(props) => props.theme.colors.primary.darkBlue.lighter};
  }

  &:active,
  &:focus {
    border-color: ${(props) => props.theme.colors.primary.blue.main};
  }

  &:hover {
    background: ${(props) => props.theme.colors.secondary.grey.lighter};
  }

  &:disabled {
    cursor: not-allowed;
    border-color: ${(props) => props.theme.colors.secondary.grey.main};
    background: ${(props) => props.theme.colors.secondary.grey.lighter};
  }

  ${(props) => {
    if (props.isInvalid) {
      return css`
        border-color: ${props.theme.colors.secondary.red.error};

        &:active,
        &:focus {
          border-color: ${props.theme.colors.secondary.red.error};
        }
      `
    }
  }}
`

const InputWrap = styled.div`
  display: flex;
  position: relative;
`

interface InputIconProps {
  side: 'left' | 'right'
}

const InputIcon = styled.div<InputIconProps>`
  position: absolute;
  top: 0;
  height: 100%;
  width: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 2;
  color: ${(props) => props.theme.colors.primary.darkBlue.lighter};

  ${(props) => {
    switch (props.side) {
      case 'left': {
        return css`
          left: 0;
        `
      }
      case 'right': {
        return css`
          right: 0;
        `
      }
      default: {
        return ''
      }
    }
  }}
`

const Input: React.FC<InputProps> = ({ leftIcon, rightIcon, ...props }) => {
  return (
    <InputWrap>
      {leftIcon && <InputIcon side="left">{leftIcon}</InputIcon>}
      <InputStyle leftIcon={leftIcon} rightIcon={rightIcon} {...props} />
      {rightIcon && <InputIcon side="right">{rightIcon}</InputIcon>}
    </InputWrap>
  )
}

export default Input
