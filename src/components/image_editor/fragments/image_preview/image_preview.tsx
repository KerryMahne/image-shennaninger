import { useControlStore } from '../../image_editor.store'
import * as Styled from './image_preview.styled'

interface ImagePreviewProps {
  id: string;
}

export function ImagePreview ({ id } : ImagePreviewProps) {
  const {
    image: { url },
    grayscale,
    blur,
    width,
    height
  } = useControlStore()

  return (
    <Styled.Image
      id={id}
      grayscale={grayscale}
      blur={blur}
      width={width}
      height={height}
      src={url}
    ></Styled.Image>
  )
}
