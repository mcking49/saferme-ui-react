import { Meta, Story } from '@storybook/react'
import React from 'react'

import { DECORATORS } from '../../../utils/storybook'

import { Textarea, TextareaProps } from '.'

export default {
  title: 'Forms/Textarea',
  component: Textarea,
  decorators: DECORATORS,
} as Meta<typeof Textarea>

const Template: Story<TextareaProps> = (args) => <Textarea {...args} />

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Placeholder',
  disabled: false,
  isInvalid: false,
}

export const Disabled = Template.bind({})
Disabled.args = {
  placeholder: 'Placeholder',
  disabled: true,
  isInvalid: false,
}

export const Invalid = Template.bind({})
Invalid.args = {
  placeholder: 'Placeholder',
  disabled: false,
  isInvalid: true,
}
