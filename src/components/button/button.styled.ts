import styled from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary';

const BUTTON_BACKGROUND = {
  primary: 'var(--color-button-background-primary)',
  secondary: 'var(--color-button-background-secondary)'
}

const BUTTON_TEXT = {
  primary: 'var(--color-button-text-primary)',
  secondary: 'var(--color-button-text-secondary)'
}

export const Button = styled.button<{ variant: ButtonVariant }>`
  min-height: 3rem;
  min-width: 15rem;

  padding: 0 1.5rem;

  font-family: Archia, sans-serif;
  font-size: 1.6rem;
  font-weight: 800;
  line-height: 1;

  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s;

  border: 1px solid var(--color-primary);
  border-radius: 12.5rem;

  background-color: ${({ variant }) => BUTTON_BACKGROUND[variant]};
  color: ${({ variant }) => BUTTON_TEXT[variant]};

  &:hover {
    border: 1px solid var(--color-button-background-hover);
    background-color: var(--color-button-background-hover);
    color: var(--color-button-text-hover);
  }
`
