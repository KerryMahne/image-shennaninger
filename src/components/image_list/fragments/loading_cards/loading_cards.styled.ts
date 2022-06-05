import styled from 'styled-components'
import { Skeleton } from '../../../skeleton/skeleton'
import { IMAGE_HEIGHT, IMAGE_WIDTH } from '../image_card/image_card.constants'

export const LoadingCardContainer = styled.div`
  width: ${IMAGE_WIDTH}px;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 5px;

  background-color: var(--color-background-secondary);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  overflow: hidden;
`

export const LoadingImage = styled(Skeleton)`
  width: 100%;
  height: ${IMAGE_HEIGHT}px;
`

export const LoadingAuthor = styled(Skeleton)`
  margin: 0.5rem;
  height: 1.5rem;
`
