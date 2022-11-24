import React from 'react'
import styled from 'styled-components'

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const InputStyle = styled.input<InputProps>`
  padding: 10px 16px;
  background: ${(props) => props.theme.colors.secondary.grey.light};
  border: 1px solid ${(props) => props.theme.colors.secondary.grey.main};
  border-radius: 4px;

  &::placeholder {
    color: ${(props) => props.theme.colors.primary.darkBlue.lighter};
  }
`

const Input: React.FC<InputProps> = (props) => <InputStyle {...props} />

export default Input
