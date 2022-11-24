import { Meta, Story } from '@storybook/react'
import React from 'react'

import { DECORATORS } from '../../utils/storybook'

import { toast } from './Toast'
import { ToastWrapProps } from './ToastItem'

const ToastExample = ({ type }: ToastWrapProps) => {
  const open = () => {
    toast(type, 'Hello World!')
  }

  return <button onClick={open}>Toast</button>
}

export default {
  title: 'Components/Toast',
  component: ToastExample,
  decorators: DECORATORS,
} as Meta<typeof ToastExample>

const Template: Story<ToastWrapProps> = (args) => <ToastExample {...args} />

export const Error = Template.bind({})
Error.args = {
  type: 'error',
}

export const Info = Template.bind({})
Info.args = {
  type: 'info',
}

export const Success = Template.bind({})
Success.args = {
  type: 'success',
}

export const Warning = Template.bind({})
Warning.args = {
  type: 'warning',
}
