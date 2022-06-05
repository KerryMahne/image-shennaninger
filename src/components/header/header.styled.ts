import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 4rem;

  display: flex;
  flex-direction: row;
  align-items: center;

  border-bottom: 1px solid var(--color-border-primary);
`

export const NavItem = styled.div`
  color: var(--color-primary);
  padding: 0 1rem;

  border-left: 1px solid var(--color-border-primary);
  font-weifht: 600;
`
