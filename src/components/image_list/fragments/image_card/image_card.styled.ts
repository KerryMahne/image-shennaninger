import styled from 'styled-components'
import { IMAGE_HEIGHT, IMAGE_WIDTH } from './image_card.constants'

export const ImageContainer = styled.div`
  width: ${IMAGE_WIDTH}px;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 5px;

  background-color: var(--color-background-secondary);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  overflow: hidden;

  &:hover {
    transform: translate3d(0, -2px, 0);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    cursor: pointer;
  }
`

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: ${IMAGE_HEIGHT}px;
`

export const Author = styled.div`
  margin: 0.5rem;
  font-size: 1rem;
`
