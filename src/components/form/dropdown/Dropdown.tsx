import React, { FC, useEffect, useState } from 'react'
import styled, { css } from 'styled-components'

import { IconArrowDown } from '../../icons'

export interface DropdownOption {
  label: string
  value: string | number
}

export interface DropdownProps {
  isDisabled?: boolean
  isInvalid?: boolean
  options: DropdownOption[]
  placeholder?: string
  defaultValue?: string | number
}

type DropdownButtonProps = Pick<DropdownProps, 'isInvalid'> & {
  isMenuOpen: boolean
}

interface DropdownIconProps {
  isMenuOpen: boolean
}

interface DropdownMenuProps {
  isShowing: boolean
}

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
  width: 100%;

  &:active,
  &:focus {
    border-color: ${(props) => props.theme.colors.primary.blue.main};

    + ul {
      border-color: ${(props) => props.theme.colors.primary.blue.main};
    }
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

          + ul {
            border-color: ${props.theme.colors.secondary.red.error};
          }
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

const DropdownMenu = styled.ul<DropdownMenuProps>`
  position: absolute;
  top: calc(100% - 1px);
  left: 0;
  margin: 0;
  padding: 0;
  background: ${(props) => props.theme.colors.secondary.grey.light};
  border: 1px solid;
  border-top-width: 0;
  border-color: ${(props) => props.theme.colors.secondary.grey.main};
  border-radius: 4px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  width: calc(100% - 2px);
  list-style: none;
  display: flex;
  flex-direction: column;
  transition: ${(props) => props.theme.animations.general};
  opacity: ${(props) => (props.isShowing ? 1 : 0)};
`

const DropdownMenuItem = styled.li`
  cursor: pointer;
  padding: 10px 16px;
  width: 100%;

  &:hover {
    background: ${(props) => props.theme.colors.secondary.grey.lighter};
  }
`

const DropdownPlaceholder = styled.span`
  color: ${(props) => props.theme.colors.primary.darkBlue.lighter};
`

const DropdownWrapper = styled.div`
  position: relative;
`

const Dropdown: FC<DropdownProps> = ({
  isDisabled,
  isInvalid,
  options,
  placeholder,
  defaultValue,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMenuVisible, setIsMenuVisible] = useState(false)

  const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(
    () => {
      if (typeof defaultValue !== 'undefined') {
        return options.find((option) => option.value === defaultValue) ?? null
      }

      return null
    }
  )

  const text = selectedOption?.label ?? (
    <DropdownPlaceholder>{placeholder}</DropdownPlaceholder>
  )

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuVisible(false)
    } else {
      setIsMenuOpen(true)
    }
  }

  const onSelectOption = (option: DropdownOption) => {
    setSelectedOption(option)
    toggleMenu()
  }

  // If menu is mounted, update visibility state to animate it in
  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuVisible(true)
    }
  }, [isMenuOpen])

  // If menu has been hidden, wait for animation before unmounting
  useEffect(() => {
    if (!isMenuVisible) {
      setTimeout(() => {
        setIsMenuOpen(false)
      }, 200)
    }
  }, [isMenuVisible])

  return (
    <DropdownWrapper>
      <DropdownButton
        disabled={isDisabled}
        isInvalid={isInvalid}
        isMenuOpen={isMenuOpen && isMenuVisible}
        onClick={toggleMenu}
      >
        {text}
        <DropdownIcon isMenuOpen={isMenuOpen && isMenuVisible}>
          <IconArrowDown />
        </DropdownIcon>
      </DropdownButton>

      {isMenuOpen && (
        <DropdownMenu isShowing={isMenuVisible}>
          {options.map((option) => (
            <DropdownMenuItem
              key={option.value}
              onClick={() => onSelectOption(option)}
            >
              {option.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenu>
      )}
    </DropdownWrapper>
  )
}

export default Dropdown
