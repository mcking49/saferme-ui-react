import { Meta, Story } from '@storybook/react'
import React from 'react'

import { DECORATORS } from '../../../utils/storybook'

import { Dropdown, DropdownProps } from '.'

export default {
  title: 'Forms/Dropdown',
  component: Dropdown,
  decorators: DECORATORS,
} as Meta<typeof Dropdown>

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Placeholder',
  value: undefined,
  isDisabled: false,
}

export const Disabled = Template.bind({})
Disabled.args = {
  placeholder: 'Placeholder',
  value: undefined,
  isDisabled: true,
}

export const WithValue = Template.bind({})
WithValue.args = {
  placeholder: undefined,
  value: 'Value',
  isDisabled: false,
}
