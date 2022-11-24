import React, { useEffect, useState } from 'react'
import { resolveValue, Toast, useToaster } from 'react-hot-toast'
import styled from 'styled-components'

interface ToastContainerProps {
  t: Toast
}

interface ToastContainerWrapProps {
  offset: number
  visible: boolean
}

const ToastContainerWrap = styled.div<ToastContainerWrapProps>`
  left: 0;
  right: 0;
  display: flex;
  position: absolute;
  transition: all 230ms cubic-bezier(0.21, 1.02, 0.73, 1) 0s;
  top: 0;
  transform: translateY(${(props) => props.offset}px);
  justify-content: center;
  opacity: ${(props) => (props.visible ? 1 : 0)};
`

export const ToastContainer: React.FC<ToastContainerProps> = ({ t }) => {
  const { handlers } = useToaster()
  const { calculateOffset, updateHeight } = handlers
  const [isAnimatedIn, setIsAnimatedIn] = useState(false)

  const offset = calculateOffset(t, {
    reverseOrder: false,
    gutter: 8,
  })

  const ref = (el: HTMLDivElement) => {
    if (el && typeof t.height !== 'number') {
      const height = el.getBoundingClientRect().height
      updateHeight(t.id, height)
    }
  }

  useEffect(() => {
    if (t.visible) {
      setIsAnimatedIn(true)
    }
  }, [t.visible])

  const message = resolveValue(t.message, t)

  return (
    <ToastContainerWrap
      ref={ref}
      offset={offset}
      visible={t.visible && isAnimatedIn}
    >
      {message}
    </ToastContainerWrap>
  )
}
