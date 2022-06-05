import { Image } from '../../services/interfaces'
import { Button } from '../button/button.styled'
import { Loader } from '../loader/loader'
import { ControlBlur } from './fragments/controls/control_blur'
import { ControlGrayscale } from './fragments/controls/control_grayscale'
import { ControlHeight } from './fragments/controls/control_height'
import { ControlWidth } from './fragments/controls/control_width'
import { ImagePreview } from './fragments/image_preview/image_preview'
import {
  createControlStore,
  ControlProvider,
  useControlStore
} from './image_editor.store'
import * as Styled from './image_editor.styled'
import { useDownloadImage } from './use_download_image'

export function getImageName (imageId: string) {
  return `picsum-${imageId}`
}

interface ImageEditorProps {
  image: Image;
}

export function ImageEditor ({ image }: ImageEditorProps) {
  return (
    <ControlProvider createStore={() => createControlStore(image)}>
      <ImageEditorControls />
    </ControlProvider>
  )
}

export function ImageEditorControls () {
  const {
    image: { id: imageId }
  } = useControlStore()
  const { downloadImage, loading } = useDownloadImage()
  const imagePreviewId = `image-preview-${imageId}`

  return (
    <Styled.ImageEditorContainer>
      {loading && (
        <Styled.LoadingOverlay>
          <Loader size={64} color="var(--color-primary)" />
        </Styled.LoadingOverlay>
      )}
      <Styled.ImageContainer>
        <ImagePreview id={imagePreviewId}/>
      </Styled.ImageContainer>
      <Styled.ControlsContainer>
        <ControlWidth />
        <ControlHeight />
        <ControlBlur />
        <ControlGrayscale />
      </Styled.ControlsContainer>
      <Button
        variant="primary"
        onClick={async () => {
          await downloadImage(imagePreviewId, getImageName(imageId))
        }}
      >
        Download
      </Button>
    </Styled.ImageEditorContainer>
  )
}
