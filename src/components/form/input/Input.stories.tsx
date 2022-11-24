import { Meta, Story } from '@storybook/react'
import React from 'react'

import { DECORATORS } from '../../../utils/storybook'

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
}
