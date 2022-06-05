import { Link } from 'react-router-dom'
import { ROUTES } from '../../constants/routes'
import * as Styled from './header.styled'

export function Header () {
  return (
    <Styled.HeaderContainer>
      <Link to={ROUTES.HOME}>
        <Styled.NavItem>Home</Styled.NavItem>
      </Link>
    </Styled.HeaderContainer>
  )
}
