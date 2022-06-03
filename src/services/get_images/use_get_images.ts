import { useState } from 'react'
import { useInfiniteQuery, useQueryClient } from 'react-query'
import { transformImage } from '../image.transformer'
import { RemoteDataType } from '../interfaces'
import { QUERY_KEYS } from '../query_keys'
import { getImages } from './get_images.api'
import { ImagesQueryResult } from './get_images.interfaces'

function getNextPageNumber (_lastPage: string[], allPages: string[][]) {
  return allPages.length + 1
}

export function useGetImages (): ImagesQueryResult {
  // react query doesnt handle this
  const [isFetchingNextPageError, setIsFetchingNextPageError] = useState(false)

  const queryClient = useQueryClient()
  const {
    data,
    isLoading,
    isError,
    refetch: refetchQuery,
    isSuccess,
    hasNextPage,
    fetchNextPage: fetchNextPageQuery,
    isFetchingNextPage
  } = useInfiniteQuery<string[]>(
    QUERY_KEYS.ALL_IMAGES,
    async ({ pageParam = 1 }) => {
      const imagesResponse = await getImages(pageParam)

      return imagesResponse.map((image) => {
        const normalizedImage = transformImage(image)
        queryClient.setQueryData(normalizedImage.id, normalizedImage)

        return normalizedImage.id
      })
    },
    {
      getNextPageParam: getNextPageNumber,
      refetchOnWindowFocus: false
    }
  )

  const refetch = async (): Promise<void> => {
    await refetchQuery()
  }

  const fetchNextPage = async (): Promise<void> => {
    try {
      await fetchNextPageQuery()
    } catch (error) {
      setIsFetchingNextPageError(true)
    }
  }

  const partialResult = {
    fetchNextPage,
    refetch,
    hasNextPage: hasNextPage ?? false
  }

  const images: string[] =
    data?.pages.flatMap((imageIds: string[]) =>
      imageIds.map((imageId) => imageId)
    ) ?? []

  if (isFetchingNextPageError) {
    return {
      ...partialResult,
      data: {
        type: RemoteDataType.ERROR_NEXT_PAGE,
        data: images
      }
    }
  }

  if (isError) {
    return {
      ...partialResult,
      data: {
        type: RemoteDataType.ERROR
      }
    }
  }

  if (isFetchingNextPage) {
    return {
      ...partialResult,
      data: {
        type: RemoteDataType.LOADING_NEXT_PAGE,
        data: images
      }
    }
  }

  if (isLoading) {
    return {
      ...partialResult,
      data: {
        type: RemoteDataType.LOADING
      }
    }
  }

  if (isSuccess && images.length === 0) {
    return {
      ...partialResult,
      data: {
        type: RemoteDataType.EMPTY
      }
    }
  }

  if (isSuccess) {
    return {
      ...partialResult,
      data: {
        type: RemoteDataType.SUCCESS,
        data: images
      }
    }
  }

  // the query is enabled, so this won't happen
  // but if we wanted to fetch manually, this would be handy
  return {
    ...partialResult,
    data: { type: RemoteDataType.NONE }
  }
}
