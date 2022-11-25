import React from 'react'
import styled, { css } from 'styled-components'

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  isRequired?: boolean
}

const LabelStyle = styled.label<LabelProps>`
  ${(props) => {
    if (props.isRequired) {
      return css`
        &:after {
          content: '*';
          margin-left: 2px;
        }
      `
    }
  }}
`

const Label: React.FC<LabelProps> = ({ children, ...props }) => {
  return <LabelStyle {...props}>{children}</LabelStyle>
}

export default Label
