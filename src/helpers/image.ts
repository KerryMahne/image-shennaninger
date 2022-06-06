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

interface GetImageWithFiltersParams extends GetImageWithSizeParams {
  blur: number;
  grayscale: boolean;
}
export function getImageWithFilters ({
  imageId,
  width,
  height,
  blur,
  grayscale
}: GetImageWithFiltersParams) {
  const urlWithSize = getImageWithSize({ imageId, width, height })
  // the url actually works if you do ?&grayscale so not covering conditional & in the url :D
  const blurAppendix = blur > 0 ? `blur=${blur}` : ''
  const grayscaleAppendix = grayscale ? 'grayscale' : ''

  return `${urlWithSize}?${blurAppendix}&${grayscaleAppendix}`
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
