/* eslint-disable @typescript-eslint/no-unused-vars */
import { useGetImages } from '../../services/get_images/use_get_images'
import { RemoteDataType } from '../../services/interfaces'
import { Loader } from '../loader/loader'
import { ImageCard } from './fragments/image_card/image_card'
import { LoadingCards } from './fragments/loading_cards/loading_cards'
import * as Styled from './image_list.styled'

export function ImageList () {
  const { data, refetch, fetchNextPage, hasNextPage } = useGetImages()

  function getContent () {
    switch (data.type) {
      case RemoteDataType.ERROR:
        return (
          <>
            <Styled.ErrorText>Failed to fetch images</Styled.ErrorText>
            <Styled.FetchButton variant="secondary" onClick={refetch}>
              Try again?
            </Styled.FetchButton>
          </>
        )
      case RemoteDataType.LOADING:
        return (
          <Styled.ImageListContainer>
            <LoadingCards />
          </Styled.ImageListContainer>
        )
      case RemoteDataType.SUCCESS:
        return (
          <Styled.ImageListContainer>
            {data.data.map((imageId) => (
              <ImageCard key={imageId} imageId={imageId} />
            ))}
            {hasNextPage && (
              <Styled.FetchButton variant="secondary" onClick={fetchNextPage}>
                More!
              </Styled.FetchButton>
            )}
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
            <Styled.ImageListContainer>
              <LoadingCards />
            </Styled.ImageListContainer>
            <Styled.FetchButton variant="secondary">
              <Loader size={16} color="var(--color-primary)" />
            </Styled.FetchButton>
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
            <Styled.ErrorText>Failed to fetch next page</Styled.ErrorText>
            <Styled.FetchButton variant="secondary" onClick={fetchNextPage}>
              Try again?
            </Styled.FetchButton>
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
