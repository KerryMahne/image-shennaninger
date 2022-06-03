import { useQuery, useQueryClient } from 'react-query'
import { transformImage } from '../image.transformer'
import { Image, RemoteDataType } from '../interfaces'
import { QUERY_KEYS } from '../query_keys'
import { getImage } from './get_image.api'
import { ImageQueryResult } from './get_image.interfaces'

export function useGetImage (imageId: string): ImageQueryResult {
  const queryClient = useQueryClient()
  const queryKey = QUERY_KEYS.SINGLE_IMAGE(imageId)

  const {
    data,
    isLoading,
    isError,
    refetch: refetchQuery,
    isSuccess
  } = useQuery<Image>(
    queryKey,
    async () => {
      const imageResponse = await getImage(imageId)

      const normalizedImage = transformImage(imageResponse)
      // very pointless here, but if this would be more complex
      // it would be useful to keep the data in sync with query
      queryClient.setQueryData(queryKey, normalizedImage)

      return normalizedImage
    },
    {
      initialData: () => {
        // try to prefetch so we save some API calls :)
        return queryClient.getQueryData(queryKey)
      }
    }
  )

  const refetch = async (): Promise<void> => {
    await refetchQuery()
  }

  if (isError) {
    return {
      refetch,
      data: {
        type: RemoteDataType.ERROR
      }
    }
  }

  if (isLoading) {
    return {
      refetch,
      data: {
        type: RemoteDataType.LOADING
      }
    }
  }

  if (isSuccess && data === undefined) {
    return {
      refetch,
      data: {
        type: RemoteDataType.EMPTY
      }
    }
  }

  if (isSuccess) {
    return {
      refetch,
      data: {
        type: RemoteDataType.SUCCESS,
        data
      }
    }
  }

  return {
    refetch,
    data: { type: RemoteDataType.NONE }
  }
}
