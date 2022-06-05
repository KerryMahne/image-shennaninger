import { ControlActionType } from '../../controls.reducer'
import { clampValue } from '../../image_editor.helpers'
import { ControlsDispatch } from '../../image_editor.interfaces'
import * as Styled from './controls.styled'

const MIN_IMAGE_WIDTH = 1

interface ControlWidthProps {
  maxWidth: number;
  width: number;
  dispatch: ControlsDispatch;
}
export function ControlWidth ({ maxWidth, width, dispatch }: ControlWidthProps) {
  return (
    <>
      <Styled.ControlLabel htmlFor="width">Width</Styled.ControlLabel>
      <Styled.ControlsRow>
        <input
          type="number"
          id="width"
          value={width}
          max={maxWidth}
          min={MIN_IMAGE_WIDTH}
          onChange={(e) => {
            // the clamping is done here, so the reducer is "pure" and dumb
            dispatch({
              type: ControlActionType.WIDTH,
              payload: clampValue({
                value: Number(e.target.value),
                min: MIN_IMAGE_WIDTH,
                max: maxWidth
              })
            })
          }}
        />
      </Styled.ControlsRow>
    </>
  )
}
