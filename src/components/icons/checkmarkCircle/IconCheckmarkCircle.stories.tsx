import { Meta, Story } from '@storybook/react'
import React from 'react'

import { DECORATORS } from '../../../utils/storybook'
import { IconProps } from '../../../types/icon'

import { IconCheckmarkCircle } from '.'

export default {
  title: 'Icons/CheckmarkCircle',
  component: IconCheckmarkCircle,
  decorators: DECORATORS,
} as Meta<typeof IconCheckmarkCircle>

const Template: Story<IconProps> = (args) => <IconCheckmarkCircle {...args} />

export const Standard = Template.bind({})
Standard.args = {
  size: '1rem',
  color: 'currentColor',
}
