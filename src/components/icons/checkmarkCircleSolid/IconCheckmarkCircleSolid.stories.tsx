import { Meta, Story } from '@storybook/react'
import React from 'react'

import { DECORATORS } from '../../../utils/storybook'
import { IconProps } from '../../../types/icon'

import { IconCheckmarkCircleSolid } from '.'

export default {
  title: 'Icons/CheckmarkCircle',
  component: IconCheckmarkCircleSolid,
  decorators: DECORATORS,
} as Meta<typeof IconCheckmarkCircleSolid>

const Template: Story<IconProps> = (args) => (
  <IconCheckmarkCircleSolid {...args} />
)

export const Standard = Template.bind({})
Standard.args = {
  size: '1rem',
  color: 'currentColor',
}
