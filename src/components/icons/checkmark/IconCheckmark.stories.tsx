import { Meta, Story } from '@storybook/react'
import React from 'react'

import { DECORATORS } from '../../../utils/storybook'
import { IconProps } from '../../../types/icon'

import { IconCheckmark } from '.'

export default {
  title: 'Icons/Checkmark',
  component: IconCheckmark,
  decorators: DECORATORS,
} as Meta<typeof IconCheckmark>

const Template: Story<IconProps> = (args) => <IconCheckmark {...args} />

export const Standard = Template.bind({})
Standard.args = {
  size: '1rem',
  color: 'currentColor',
}
