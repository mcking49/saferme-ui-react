import { Meta, Story } from '@storybook/react'
import React from 'react'

import { DECORATORS } from '../../utils/storybook'
import { ButtonProps } from '../../types/button'
import { IconArrowLeft, IconArrowRight, IconCheckmark } from '../icons'

import { Button } from '.'

export default {
  title: 'Components/Button',
  component: Button,
  decorators: DECORATORS,
} as Meta<typeof Button>

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Button',
  variant: 'default',
  disabled: false,
}

export const Primary = Template.bind({})
Primary.args = {
  children: 'Button',
  variant: 'primary',
  disabled: false,
}

export const PrimaryIconLeft = Template.bind({})
PrimaryIconLeft.args = {
  children: 'Button',
  variant: 'primary',
  disabled: false,
  iconLeft: <IconCheckmark />,
}

export const PrimaryGreen = Template.bind({})
PrimaryGreen.args = {
  children: 'Button',
  variant: 'primary',
  disabled: false,
  colorScheme: 'green',
}

export const Outline = Template.bind({})
Outline.args = {
  children: 'Button',
  variant: 'outline',
  disabled: false,
}

export const OutlineGreen = Template.bind({})
OutlineGreen.args = {
  children: 'Button',
  variant: 'outline',
  disabled: false,
  colorScheme: 'green',
}

export const OutlineGreenIconLeft = Template.bind({})
OutlineGreenIconLeft.args = {
  children: 'Button',
  variant: 'outline',
  disabled: false,
  colorScheme: 'green',
  iconLeft: <IconCheckmark />,
}

export const Plain = Template.bind({})
Plain.args = {
  children: 'Button',
  variant: 'plain',
  disabled: false,
}

export const PlainIconLeft = Template.bind({})
PlainIconLeft.args = {
  children: 'Back',
  variant: 'plain',
  disabled: false,
  iconLeft: <IconArrowLeft />,
}

export const PlainIconRight = Template.bind({})
PlainIconRight.args = {
  children: 'Next',
  variant: 'plain',
  disabled: false,
  iconRight: <IconArrowRight />,
}

export const PlainRed = Template.bind({})
PlainRed.args = {
  children: 'Button',
  variant: 'plain',
  disabled: false,
  colorScheme: 'red',
}
