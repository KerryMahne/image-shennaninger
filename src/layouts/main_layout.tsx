import { PropsWithChildren } from 'react'
import { Header } from '../components/header/header'
import * as Styled from './main_layout.styled'

export function MainLayout ({ children }: PropsWithChildren<{}>) {
  return (
    <Styled.MainLayoutContainer>
      <Header />
      <Styled.MainLayoutContent>{children}</Styled.MainLayoutContent>
    </Styled.MainLayoutContainer>
  )
}
