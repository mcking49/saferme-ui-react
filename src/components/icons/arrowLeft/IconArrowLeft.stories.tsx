import { Meta, Story } from '@storybook/react'
import React from 'react'

import { DECORATORS } from '../../../utils/storybook'
import { IconProps } from '../../../types/icon'

import { IconArrowLeft } from '.'

export default {
  title: 'Icons/ArrowLeft',
  component: IconArrowLeft,
  decorators: DECORATORS,
} as Meta<typeof IconArrowLeft>

const Template: Story<IconProps> = (args) => <IconArrowLeft {...args} />

export const Standard = Template.bind({})
Standard.args = {
  size: '1em',
  color: 'currentColor',
}
