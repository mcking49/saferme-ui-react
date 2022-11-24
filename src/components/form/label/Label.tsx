import React from 'react'
import styled from 'styled-components'

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  isRequired?: boolean
}

const LabelStyle = styled.label<LabelProps>``

const Label: React.FC<LabelProps> = ({ children, ...props }) => {
  return <LabelStyle {...props}>{children}</LabelStyle>
}

export default Label
