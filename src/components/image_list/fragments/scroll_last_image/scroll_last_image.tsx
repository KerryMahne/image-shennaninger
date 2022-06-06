import { PropsWithChildren, useEffect } from 'react'
import {
  clearLastSeenImage,
  getImageCardId,
  getLastSeenImage
} from '../../../../helpers/image'

type ScrollLastImageProps = PropsWithChildren<{}>;

export function ScrollLastImage ({ children }: ScrollLastImageProps) {
  useEffect(() => {
    const scrollToLastImage = () => {
      const lastSeenImage = getLastSeenImage()

      if (lastSeenImage === null) {
        return
      }

      const element = document.getElementById(getImageCardId(lastSeenImage))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        clearLastSeenImage() // I guess it makes sense to only do it once?
      }
    }
    scrollToLastImage()
  }, [])

  return <>{children}</>
}
