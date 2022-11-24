import React, { ReactNode } from 'react'
import reactHotToast from 'react-hot-toast'

import { ToastType } from '../../types/toast'

import { ToastItem } from './ToastItem'
import { ToastMessage } from './ToastMessage'

/**
 * Show a toast
 *
 * @param type Type of Toast to show
 * @param message Message to display in the toast
 */
export function toast(type: ToastType, message: string | ReactNode) {
  reactHotToast(
    (t) => (
      <ToastItem toastId={t.id} type={type}>
        <ToastMessage>{message}</ToastMessage>
      </ToastItem>
    ),
    {
      duration: type === 'error' ? Infinity : 3000,
    }
  )
}
