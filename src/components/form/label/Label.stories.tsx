import { Meta, Story } from '@storybook/react'
import React from 'react'

import { DECORATORS } from '../../../utils/storybook'

import { Label, LabelProps } from '.'

export default {
  title: 'Forms/Label',
  component: Label,
  decorators: DECORATORS,
} as Meta<typeof Label>

const Template: Story<LabelProps> = (args) => <Label {...args}>Label</Label>

export const Default = Template.bind({})
Default.args = {
  isRequired: false,
}
