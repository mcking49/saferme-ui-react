import { Meta, Story } from '@storybook/react'
import React from 'react'

import { DECORATORS } from '../../../utils/storybook'
import { IconProps } from '../../../types/icon'

import { IconInfoSolid } from '.'

export default {
  title: 'Icons/InfoSolid',
  component: IconInfoSolid,
  decorators: DECORATORS,
} as Meta<typeof IconInfoSolid>

const Template: Story<IconProps> = (args) => <IconInfoSolid {...args} />

export const Standard = Template.bind({})
Standard.args = {
  size: '1rem',
  color: 'currentColor',
}
