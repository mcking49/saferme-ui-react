import React, { FC, useState } from 'react'
import styled, { css } from 'styled-components'

import { IconArrowDown } from '../../icons'

export interface DropdownProps {
  isDisabled?: boolean
  isInvalid?: boolean
  placeholder?: string
  value?: string
}

type DropdownButtonProps = Pick<DropdownProps, 'isInvalid'> & {
  isMenuOpen: boolean
}

interface DropdownIconProps {
  isMenuOpen: boolean
}

const DropdownWrapper = styled.div`
  position: relative;
`

const DropdownButton = styled.button<DropdownButtonProps>`
  outline: none;
  transition: all 0.2s ease;
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

  &:active,
  &:focus {
    border-color: ${(props) => props.theme.colors.primary.blue.main};
  }

  &:hover {
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

  ${(props) => {
    if (props.isMenuOpen) {
      return css`
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;

        &:active,
        &:focus {
          border-bottom-color: ${props.theme.colors.secondary.grey.main};
        }
      `
    }
  }}

  &:disabled {
    cursor: not-allowed;
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

const Dropdown: FC<DropdownProps> = ({
  isDisabled,
  isInvalid,
  placeholder,
  value,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const text = value ?? <DropdownPlaceholder>{placeholder}</DropdownPlaceholder>

  return (
    <DropdownWrapper>
      <DropdownButton
        disabled={isDisabled}
        isInvalid={isInvalid}
        isMenuOpen={isMenuOpen}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {text}
        <DropdownIcon isMenuOpen={isMenuOpen}>
          <IconArrowDown />
        </DropdownIcon>
      </DropdownButton>
    </DropdownWrapper>
  )
}

export default Dropdown
