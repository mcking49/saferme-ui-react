import React, { FC } from 'react'
import styled from 'styled-components'

export interface DropdownProps {
  placeholder?: string
  value?: string
}

const Wrapper = styled.div`
  position: relative;
`

const DropdownButton = styled.button`
  color: ${(props) => props.theme.colors.primary.darkBlue.main};
  background: ${(props) => props.theme.colors.secondary.grey.light};
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.secondary.grey.main};
  padding: 10px 16px;
  text-transform: none;
  font-family: ${(props) => props.theme.typography.body.fontFamily};
  border-radius: 4px;
  font-size: ${(props) => props.theme.typography.body.fontSize};
  line-height: ${(props) => props.theme.typography.body.lineHeight};
`

const DropdownPlaceholder = styled.span`
  color: ${(props) => props.theme.colors.primary.darkBlue.lighter};
`

const Dropdown: FC<DropdownProps> = ({ placeholder, value }) => {
  const text = value ?? <DropdownPlaceholder>{placeholder}</DropdownPlaceholder>

  return (
    <Wrapper>
      <DropdownButton>{text}</DropdownButton>
    </Wrapper>
  )
}

export default Dropdown
