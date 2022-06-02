import logo from '../../assets/synthesia-logo.svg'
import * as Styled from './header.styled'

export function Header () {
  return (
    <Styled.HeaderContainer>
      <img src={logo} alt="Synthesia Logo" height={23} />
      <Styled.NavItem>Home</Styled.NavItem>
    </Styled.HeaderContainer>
  )
}
