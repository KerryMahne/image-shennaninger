/* eslint-disable @typescript-eslint/no-unused-vars */
import { useGetImages } from '../../services/get_images/use_get_images'
import { RemoteDataType } from '../../services/interfaces'
import { ImageCard } from './fragments/image_card/image_card'
import * as Styled from './image_list.styled'

export function ImageList () {
  const { data, refetch, fetchNextPage, hasNextPage } = useGetImages()

  function getContent () {
    switch (data.type) {
      case RemoteDataType.ERROR:
        return <div>Something went wrong :(</div>
      case RemoteDataType.LOADING:
        return <div>Loading...</div>
      case RemoteDataType.SUCCESS:
        return (
          <Styled.ImageListContainer>
            {data.data.map((imageId) => (
              <ImageCard key={imageId} imageId={imageId} />
            ))}
          </Styled.ImageListContainer>
        )
      case RemoteDataType.LOADING_NEXT_PAGE:
        return (
          <>
            <Styled.ImageListContainer>
              {data.data.map((imageId) => (
                <ImageCard key={imageId} imageId={imageId} />
              ))}
            </Styled.ImageListContainer>
            <div>Loading more</div>
          </>
        )
      case RemoteDataType.ERROR_NEXT_PAGE:
        return (
          <>
            <Styled.ImageListContainer>
              {data.data.map((imageId) => (
                <ImageCard key={imageId} imageId={imageId} />
              ))}
            </Styled.ImageListContainer>
            <div>Error while loading more</div>
          </>
        )
      case RemoteDataType.EMPTY:
        return <div>No images received :(</div>
      default:
        return null
    }
  }

  return <Styled.ImagesContainer>{getContent()}</Styled.ImagesContainer>
}
