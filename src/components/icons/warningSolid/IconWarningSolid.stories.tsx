import { Meta, Story } from '@storybook/react'
import React from 'react'

import { DECORATORS } from '../../../utils/storybook'
import { IconProps } from '../../../types/icon'

import { IconWarningSolid } from '.'

export default {
  title: 'Icons/WarningSolid',
  component: IconWarningSolid,
  decorators: DECORATORS,
} as Meta<typeof IconWarningSolid>

const Template: Story<IconProps> = (args) => <IconWarningSolid {...args} />

export const Standard = Template.bind({})
Standard.args = {
  size: '1rem',
  color: 'currentColor',
}
