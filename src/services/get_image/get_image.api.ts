import { API_URL } from '../../constants/images'
import { ImageResponse } from '../interfaces'

export async function getImage (imageId: string): Promise<ImageResponse> {
  const response = await fetch(`${API_URL}/id/${imageId}/info`)
  const data = await response.json()

  return data
}
