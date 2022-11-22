import { Meta, Story } from '@storybook/react'
import React from 'react'

import { DECORATORS } from '../../utils/storybook'
import { ButtonProps } from '../../types/button'

import { Button } from '.'

export default {
  title: 'Components/Button',
  component: Button,
  decorators: DECORATORS,
} as Meta<typeof Button>

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Standard = Template.bind({})
Standard.args = {
  children: 'Hello Button!',
}
