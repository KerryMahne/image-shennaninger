import { useQueryClient } from 'react-query'
import { Image } from '../../../../services/interfaces'
import * as Styled from './image_card.styled'

interface ImageCardProps {
  imageId: string;
}
export function ImageCard ({ imageId }: ImageCardProps) {
  const queryClient = useQueryClient()

  const image = queryClient.getQueryData<Image>(imageId)

  if (image === undefined) {
    console.error(`Image with id ${imageId} not found`)

    return null
  }

  return (
    <Styled.ImageContainer>
      <Styled.Image src={image.url} />
      <span>auchor: {image.author}</span>
    </Styled.ImageContainer>
  )
}
