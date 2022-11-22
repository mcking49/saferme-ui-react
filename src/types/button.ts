import React from 'react'

type ButtonVariants = 'primary' | 'outline' | 'plain' | 'default'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariants
}
