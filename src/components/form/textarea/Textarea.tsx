import React from 'react'
import styled, { css } from 'styled-components'

export type TextareaProps =
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    isInvalid?: boolean
  }

const TextareaStyle = styled.textarea<TextareaProps>`
  padding: 10px 16px;
  background: ${(props) => props.theme.colors.secondary.grey.light};
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.secondary.grey.main};
  border-radius: 4px;
  transition: all 0.2s ease;
  outline: none;
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
        border-color: ${(props) => props.theme.colors.secondary.red.error};

        &:active,
        &:focus {
          border-color: ${(props) => props.theme.colors.secondary.red.error};
        }
      `
    }
  }}
`

const Textarea = (props: TextareaProps) => <TextareaStyle {...props} />

export default Textarea
