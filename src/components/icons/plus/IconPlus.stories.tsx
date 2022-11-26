import { Meta, Story } from '@storybook/react'
import React from 'react'

import { DECORATORS } from '../../../utils/storybook'
import { IconProps } from '../../../types/icon'

import { IconPlus } from '.'

export default {
  title: 'Icons/Plus',
  component: IconPlus,
  decorators: DECORATORS,
} as Meta<typeof IconPlus>

const Template: Story<IconProps> = (args) => <IconPlus {...args} />

export const Standard = Template.bind({})
Standard.args = {
  size: '1em',
  color: 'currentColor',
}
