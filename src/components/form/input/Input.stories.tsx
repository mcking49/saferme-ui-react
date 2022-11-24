import { Meta, Story } from '@storybook/react'
import React from 'react'

import { DECORATORS } from '../../../utils/storybook'
import { IconClose, IconProfile } from '../..'

import { Input, InputProps } from '.'

export default {
  title: 'Forms/Input',
  component: Input,
  decorators: DECORATORS,
} as Meta<typeof Input>

const Template: Story<InputProps> = (args) => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Placeholder',
  disabled: false,
}

export const Disabled = Template.bind({})
Disabled.args = {
  placeholder: 'Placeholder',
  disabled: true,
}

export const LeftIcon = Template.bind({})
LeftIcon.args = {
  placeholder: 'Placeholder',
  disabled: false,
  leftIcon: <IconProfile />,
}

export const RightIcon = Template.bind({})
RightIcon.args = {
  placeholder: 'Placeholder',
  disabled: false,
  rightIcon: <IconClose />,
}

export const LeftAndRightIcon = Template.bind({})
LeftAndRightIcon.args = {
  placeholder: 'Placeholder',
  disabled: false,
  leftIcon: <IconProfile />,
  rightIcon: <IconClose />,
}
