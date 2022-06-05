import { useEffect, useMemo, useReducer } from 'react'
import { Image } from '../../services/interfaces'
import { Button } from '../button/button.styled'
import { Loader } from '../loader/loader'
import {
  ControlActionType,
  controlsReducer,
  getInitialState
} from './controls.reducer'
import { ControlBlur } from './fragments/controls/control_blur'
import { ControlGrayscale } from './fragments/controls/control_grayscale'
import { ControlHeight } from './fragments/controls/control_height'
import { ControlWidth } from './fragments/controls/control_width'
import { saveEditorData } from './image_editor.helpers'
import * as Styled from './image_editor.styled'
import { useDownloadImage } from './use_download_image'

export function getImageName (imageId: string) {
  return `picsum-${imageId}`
}

interface ImageEditorProps {
  image: Image;
}

export function ImageEditor ({ image }: ImageEditorProps) {
  const initialState = useMemo(
    () =>
      getInitialState({
        width: image.width,
        height: image.height,
        imageId: image.id
      }),
    [image.width, image.height, image.id]
  )
  const [state, dispatch] = useReducer(controlsReducer, initialState)

  useEffect(() => {
    saveEditorData(image.id, {
      width: state.width,
      height: state.height,
      blur: state.blur,
      grayscale: state.grayscale
    })
  }, [state])

  const { downloadImage, loading } = useDownloadImage()
  const isEditingDisabled = state.imageUpdating || loading

  return (
    <Styled.ImageEditorContainer>
      {isEditingDisabled && (
        <Styled.LoadingOverlay>
          <Loader size={64} color="var(--color-primary)" />
        </Styled.LoadingOverlay>
      )}
      <Styled.ImageContainer>
        <Styled.Image
          src={state.previewUrl}
          onLoad={() => {
            dispatch({
              type: ControlActionType.IMAGE_UPDATED
            })
          }}
        />
      </Styled.ImageContainer>
      <Styled.ControlsContainer>
        <ControlWidth
          width={state.width}
          dispatch={dispatch}
          maxWidth={image.width}
        />
        <ControlHeight
          height={state.height}
          dispatch={dispatch}
          maxHeight={image.height}
        />
        <ControlBlur blur={state.blur} dispatch={dispatch} />
        <ControlGrayscale grayscale={state.grayscale} dispatch={dispatch} />
      </Styled.ControlsContainer>
      <Button
        variant="primary"
        onClick={async () => {
          await downloadImage(state.previewUrl, getImageName(image.id))
        }}
      >
        Download
      </Button>
    </Styled.ImageEditorContainer>
  )
}
