import { ControlActionType } from '../../controls.reducer'
import { clampValue } from '../../image_editor.helpers'
import { ControlsDispatch } from '../../image_editor.interfaces'
import * as Styled from './controls.styled'

const MIN_IMAGE_HEIGHT = 1

interface ControlHeightProps {
  maxHeight: number;
  height: number;
  dispatch: ControlsDispatch;
}
export function ControlHeight ({
  maxHeight,
  height,
  dispatch
}: ControlHeightProps) {
  return (
    <>
      <Styled.ControlLabel htmlFor="height">Height</Styled.ControlLabel>
      <Styled.ControlsRow>
        <input
          type="number"
          id="height"
          value={height}
          max={maxHeight}
          min={MIN_IMAGE_HEIGHT}
          onChange={(e) => {
            // the clamping is done here, so the reducer is "pure" and dumb
            dispatch({
              type: ControlActionType.HEIGHT,
              payload: clampValue({
                value: Number(e.target.value),
                min: MIN_IMAGE_HEIGHT,
                max: maxHeight
              })
            })
          }}
        />
      </Styled.ControlsRow>
    </>
  )
}
