import { Image, ImageResponse } from './interfaces'

export function transformImage (image: ImageResponse): Image {
  return {
    id: image.id,
    author: image.author,
    url: image.download_url, // the basic url param is not what we need
    width: image.width,
    height: image.height
  }
}
