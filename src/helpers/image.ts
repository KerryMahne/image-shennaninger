import { BASE_IMAGE_URL } from '../constants/images'

interface GetImageWithSizeParams {
  imageId: string;
  width: number;
  height: number;
}

export function getImageWithSize ({
  imageId,
  width,
  height
}: GetImageWithSizeParams) {
  return `${BASE_IMAGE_URL}/${imageId}/${width}/${height}`
}
export function saveLastSeenImage (imageId: string) {
  sessionStorage.setItem('lastSeenImage', imageId)
}
export function getLastSeenImage () {
  return sessionStorage.getItem('lastSeenImage')
}
export function clearLastSeenImage () {
  sessionStorage.removeItem('lastSeenImage')
}

export function getImageCardId (imageId: string) {
  return `image-card-${imageId}`
}