import * as Styled from './loading_cards.styled'

// just return a fragment, so we can smash the cards into the layout easily, without duplicating the entire flex container
export function LoadingCards () {
  return (
    <>
      {new Array(30).fill(0).map((_, i) => (
        <Styled.LoadingCardContainer key={i}>
          <Styled.LoadingImage />
          <Styled.LoadingAuthor />
        </Styled.LoadingCardContainer>
      ))}
    </>
  )
}
