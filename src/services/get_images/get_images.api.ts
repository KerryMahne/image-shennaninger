import { IMAGES_PER_PAGE } from './get_images.constants'
import { ImageResponse } from '../interfaces'
import { API_URL } from '../../constants/images'

export async function getImages (page: number): Promise<ImageResponse[]> {
  const response = await fetch(
    `${API_URL}/v2/list?=page=${page}&limit=${IMAGES_PER_PAGE}`
  )
  const data = await response.json()

  return data
}
