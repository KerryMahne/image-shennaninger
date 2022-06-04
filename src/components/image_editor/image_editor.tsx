import { useReducer } from 'react'
import { Image } from '../../services/interfaces'
import { Button } from '../button/button.styled'
import {
  ControlActionType,
  controlsReducer,
  getInitialState
} from './controls.reducer'
import * as Styled from './image_editor.styled'
import { useDownloadImage } from './use_download_image'

// could be moved to global helpers, but until it's used in more places it's fine here
function clampValue ({
  value,
  min,
  max
}: {
  value: number;
  min: number;
  max: number;
}): number {
  return Math.min(Math.max(value, min), max)
}

export function getImageName (imageId: string) {
  return `picsum-${imageId}`
}

const MIN_IMAGE_WIDTH = 1
const MIN_IMAGE_HEIGHT = 1
const MIN_IMAGE_BLUR = 0
const MAX_IMAGE_BLUR = 10

interface ImageEditorProps {
  image: Image;
}

// TODO persist image state in local storage
// TODO image download stops UI
export function ImageEditor ({ image }: ImageEditorProps) {
  const [state, dispatch] = useReducer(
    controlsReducer,
    getInitialState({
      width: image.width,
      height: image.height,
      imageId: image.id
    })
  )
  const { downloadImage } = useDownloadImage()
  const isEditingDisabled = state.imageUpdating

  return (
    <Styled.ImageEditorContainer>
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
      {isEditingDisabled && <div>Loading...</div>}
      <Styled.ControlsContainer>
        <Styled.ControlLabel htmlFor="width">Width</Styled.ControlLabel>
        <Styled.ControlsRow>
          <input
            type="number"
            id="width"
            value={state.width}
            max={image.width}
            min={MIN_IMAGE_WIDTH}
            disabled={isEditingDisabled}
            onChange={(e) => {
              dispatch({
                type: ControlActionType.WIDTH,
                payload: clampValue({
                  value: Number(e.target.value),
                  min: MIN_IMAGE_WIDTH,
                  max: image.width
                })
              })
            }}
          />
        </Styled.ControlsRow>
        <Styled.ControlLabel htmlFor="height">Height</Styled.ControlLabel>
        <Styled.ControlsRow>
          <input
            type="number"
            id="height"
            value={state.height}
            max={image.height}
            min={MIN_IMAGE_HEIGHT}
            disabled={isEditingDisabled}
            onChange={(e) => {
              dispatch({
                type: ControlActionType.HEIGHT,
                payload: clampValue({
                  value: Number(e.target.value),
                  min: MIN_IMAGE_HEIGHT,
                  max: image.height
                })
              })
            }}
          />
        </Styled.ControlsRow>
        <Styled.ControlLabel htmlFor="blur">Blur</Styled.ControlLabel>
        <Styled.ControlsRow>
          <input
            type="number"
            id="blur"
            value={state.blur}
            max={MAX_IMAGE_BLUR}
            min={MIN_IMAGE_BLUR}
            disabled={isEditingDisabled}
            onChange={(e) => {
              dispatch({
                type: ControlActionType.BLUR,
                payload: clampValue({
                  value: Number(e.target.value),
                  min: MIN_IMAGE_BLUR,
                  max: MAX_IMAGE_BLUR
                })
              })
            }}
          />
        </Styled.ControlsRow>
        <Styled.ControlLabel htmlFor="grayscale">
          Grayscale?
        </Styled.ControlLabel>
        <Styled.ControlsRow>
          <input
            type="checkbox"
            id="grayscale"
            checked={state.grayscale}
            disabled={isEditingDisabled}
            onChange={(e) => {
              dispatch({
                type: ControlActionType.GRAYSCALE,
                payload: e.target.checked
              })
            }}
          />
        </Styled.ControlsRow>
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
