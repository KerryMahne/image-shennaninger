import { useQueryClient } from 'react-query'
import { Link } from 'react-router-dom'
import { BASE_IMAGE_URL } from '../../../../constants/images'
import { ROUTES } from '../../../../constants/routes'
import { Image } from '../../../../services/interfaces'
import { QUERY_KEYS } from '../../../../services/query_keys'
import { IMAGE_HEIGHT, IMAGE_WIDTH } from './image_card.constants'
import * as Styled from './image_card.styled'

interface ImageCardProps {
  imageId: string;
}
export function ImageCard ({ imageId }: ImageCardProps) {
  const queryClient = useQueryClient()

  const image = queryClient.getQueryData<Image>(
    QUERY_KEYS.SINGLE_IMAGE(imageId)
  )

  if (image === undefined) {
    console.error(`Image with id ${imageId} not found`)

    return null
  }

  return (
    <Link to={ROUTES.IMAGE_EDIT.replace(':imageId', imageId)}>
      <Styled.ImageContainer>
        {/* We don't really want to load 30 4k images if we display them 250 by 250 :) */}
        <Styled.Image
          src={`${BASE_IMAGE_URL}/${image.id}/${IMAGE_WIDTH}/${IMAGE_HEIGHT}`}
        />
        <Styled.Author>By {image.author}</Styled.Author>
      </Styled.ImageContainer>
    </Link>
  )
}
