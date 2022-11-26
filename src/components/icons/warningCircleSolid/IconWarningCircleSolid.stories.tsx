import { Meta, Story } from '@storybook/react'
import React from 'react'

import { DECORATORS } from '../../../utils/storybook'
import { IconProps } from '../../../types/icon'

import { IconWarningCircleSolid } from '.'

export default {
  title: 'Icons/WarningCircleSolid',
  component: IconWarningCircleSolid,
  decorators: DECORATORS,
} as Meta<typeof IconWarningCircleSolid>

const Template: Story<IconProps> = (args) => (
  <IconWarningCircleSolid {...args} />
)

export const Standard = Template.bind({})
Standard.args = {
  size: '1em',
  color: 'currentColor',
}
