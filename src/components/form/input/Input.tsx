import React from 'react'
import styled from 'styled-components'

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const InputStyle = styled.input<InputProps>`
  padding: 10px 16px;
  background: ${(props) => props.theme.colors.secondary.grey.light};
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.secondary.grey.main};
  border-radius: 4px;
  transition: all 0.2s ease;
  outline: none;

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
`

const Input: React.FC<InputProps> = (props) => <InputStyle {...props} />

export default Input
