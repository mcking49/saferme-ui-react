import React, { FC, ReactNode } from 'react'
import toast from 'react-hot-toast'
import styled from 'styled-components'

import { ToastType } from '../../types/toast'
import {
  IconCheckmarkCircleSolid,
  IconClose,
  IconInfoSolid,
  IconWarningCircleSolid,
  IconWarningSolid,
} from '..'

import { toastColor } from './toastColor'

export interface ToastWrapProps {
  type: ToastType
}

type ToastItemProps = ToastWrapProps & {
  children: ReactNode
  toastId: string
}

const ToastWrap = styled.div<ToastWrapProps>`
  width: 800px;
  border-left: 10px solid;
  background: ${(props) => props.theme.colors.primary.white.main};
  border-color: ${(props) => props.theme.colors.primary.white.main};
  padding: 16px;
  padding-left: 24px;
  color: ${(props) => props.theme.colors.primary.darkBlue.main};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 24px;
  animation: 0.35s cubic-bezier(0.21, 1.02, 0.73, 1) 0s 1 normal forwards
    running go3223188581;
  will-change: transform;
  border-color: ${(props) => toastColor(props.theme, props.type)};
  background: ${(props) => toastColor(props.theme, props.type, true)};
`

const ToastIcon = styled.div<ToastWrapProps>`
  font-size: 20px;
  height: 20px;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${(props) => toastColor(props.theme, props.type)};
`

const ToastCloseButton = styled.button`
  justify-self: flex-end;
  flex-shrink: 0;
  padding: 0;
  margin: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  pointer-events: all;
`

export const ToastItem: FC<ToastItemProps> = ({
  children,
  toastId,
  type = 'info',
}) => {
  let icon: ReactNode = null

  switch (type) {
    case 'error': {
      icon = <IconWarningCircleSolid />
      break
    }
    case 'info': {
      icon = <IconInfoSolid />
      break
    }
    case 'success': {
      icon = <IconCheckmarkCircleSolid />
      break
    }
    case 'warning': {
      icon = <IconWarningSolid />
      break
    }
    default:
      break
  }

  return (
    <ToastWrap type={type}>
      <ToastIcon type={type}>{icon}</ToastIcon>
      {children}
      <ToastCloseButton onClick={() => toast.dismiss(toastId)}>
        <IconClose />
      </ToastCloseButton>
    </ToastWrap>
  )
}
