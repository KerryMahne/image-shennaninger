import { IMAGES_PER_PAGE } from './get_images.constants'
import { ImageResponse } from '../interfaces'

const API_URL = 'https://picsum.photos/v2/list'

export async function getImages (page: number): Promise<ImageResponse[]> {
  const response = await fetch(
    `${API_URL}?=page=${page}&limit=${IMAGES_PER_PAGE}`
  )
  const data = await response.json()

  return data
}
