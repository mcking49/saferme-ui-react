import { Meta, Story } from '@storybook/react'
import React from 'react'

import { DECORATORS } from '../../../utils/storybook'
import { IconProps } from '../../../types/icon'

import { IconClose } from '.'

export default {
  title: 'Icons/Close',
  component: IconClose,
  decorators: DECORATORS,
} as Meta<typeof IconClose>

const Template: Story<IconProps> = (args) => <IconClose {...args} />

export const Standard = Template.bind({})
Standard.args = {
  size: '1rem',
  color: 'currentColor',
}
