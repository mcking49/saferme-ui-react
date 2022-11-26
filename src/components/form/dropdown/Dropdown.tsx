import React, { FC, useState } from 'react'
import styled from 'styled-components'

import { IconArrowDown } from '../../icons'

export interface DropdownProps {
  placeholder?: string
  value?: string
}

interface DropdownIconProps {
  isMenuOpen: boolean
}

const DropdownWrapper = styled.div`
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  &:hover {
    background: ${(props) => props.theme.colors.secondary.grey.lighter};
  }
`

const DropdownIcon = styled.div<DropdownIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: ${(props) => props.theme.colors.primary.darkBlue.lighter};
  transition: all 0.2s ease;
  transform: rotate(${(props) => (props.isMenuOpen ? 180 : 0)}deg);
`

const DropdownPlaceholder = styled.span`
  color: ${(props) => props.theme.colors.primary.darkBlue.lighter};
`

const Dropdown: FC<DropdownProps> = ({ placeholder, value }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const text = value ?? <DropdownPlaceholder>{placeholder}</DropdownPlaceholder>

  return (
    <DropdownWrapper>
      <DropdownButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {text}
        <DropdownIcon isMenuOpen={isMenuOpen}>
          <IconArrowDown />
        </DropdownIcon>
      </DropdownButton>
    </DropdownWrapper>
  )
}

export default Dropdown
