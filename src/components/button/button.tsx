import { HTMLAttributes } from 'react'
import { ButtonVariant } from './button.styled'
import * as Styled from './button.styled'

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export function Button ({
  variant = 'primary',
  children,
  ...props
}: ButtonProps) {
  return (
    <Styled.Button {...props} variant={variant}>
      {children}
    </Styled.Button>
  )
}
