import { Meta, Story } from '@storybook/react'
import React, { useState } from 'react'

import { Button } from '../../'
import { DECORATORS } from '../../../utils/storybook'

import { Modal, ModalProps } from '.'

export default {
  title: 'Components/Modal',
  component: Modal,
  decorators: DECORATORS,
} as Meta<typeof Modal>

const Example = ({ children, ...props }: Partial<ModalProps>) => {
  const [isShowing, setIsShowing] = useState(false)

  return (
    <div>
      <button onClick={() => setIsShowing(true)}>Click Me!</button>
      <Modal {...props} isOpen={isShowing} onClose={() => setIsShowing(false)}>
        {children}
      </Modal>
    </div>
  )
}

const footer = (
  <>
    <Button variant="plain">Cancel</Button>
    <Button variant="primary">Dismiss</Button>
  </>
)

const Template: Story<ModalProps> = (args) => <Example {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'None of your changes will be saved.',
  title: 'Dismiss all changes?',
  footer,
}
