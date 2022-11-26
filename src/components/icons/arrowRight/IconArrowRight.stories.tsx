import { Meta, Story } from '@storybook/react'
import React from 'react'

import { DECORATORS } from '../../../utils/storybook'
import { IconProps } from '../../../types/icon'

import { IconArrowRight } from '.'

export default {
  title: 'Icons/ArrowRight',
  component: IconArrowRight,
  decorators: DECORATORS,
} as Meta<typeof IconArrowRight>

const Template: Story<IconProps> = (args) => <IconArrowRight {...args} />

export const Standard = Template.bind({})
Standard.args = {
  size: '1em',
  color: 'currentColor',
}
