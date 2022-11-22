import { Meta, Story } from '@storybook/react'
import React from 'react'

import { DECORATORS } from '../../../utils/storybook'
import { IconProps } from '../../../types/icon'

import { IconProfile } from '.'

export default {
  title: 'Icons/Profile',
  component: IconProfile,
  decorators: DECORATORS,
} as Meta<typeof IconProfile>

const Template: Story<IconProps> = (args) => <IconProfile {...args} />

export const Standard = Template.bind({})
Standard.args = {
  size: '1rem',
  color: 'currentColor',
}
