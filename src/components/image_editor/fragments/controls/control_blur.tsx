import { ControlActionType } from '../../controls.reducer'
import { clampValue } from '../../image_editor.helpers'
import { ControlsDispatch } from '../../image_editor.interfaces'
import * as Styled from './controls.styled'

const MIN_IMAGE_BLUR = 0
const MAX_IMAGE_BLUR = 10

interface ControlBlurProps {
  blur: number;
  dispatch: ControlsDispatch;
}
export function ControlBlur ({ blur, dispatch }: ControlBlurProps) {
  return (
    <>
      <Styled.ControlLabel htmlFor="blur">Blur</Styled.ControlLabel>
      <Styled.ControlsRow>
        <input
          type="number"
          id="blur"
          value={blur}
          max={MAX_IMAGE_BLUR}
          min={MIN_IMAGE_BLUR}
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
    </>
  )
}
