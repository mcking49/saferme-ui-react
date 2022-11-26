import { Meta, Story } from '@storybook/react'
import React from 'react'

import { DECORATORS } from '../../../utils/storybook'
import { IconProps } from '../../../types/icon'

import { IconArrowDown } from '.'

export default {
  title: 'Icons/ArrowDown',
  component: IconArrowDown,
  decorators: DECORATORS,
} as Meta<typeof IconArrowDown>

const Template: Story<IconProps> = (args) => <IconArrowDown {...args} />

export const Standard = Template.bind({})
Standard.args = {
  size: '1em',
  color: 'currentColor',
}
