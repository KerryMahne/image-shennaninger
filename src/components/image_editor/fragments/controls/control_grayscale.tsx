import { ControlActionType } from '../../controls.reducer'
import { ControlsDispatch } from '../../image_editor.interfaces'
import * as Styled from './controls.styled'

interface ControlGrayscaleProps {
  grayscale: boolean;
  dispatch: ControlsDispatch;
}
export function ControlGrayscale ({
  grayscale,
  dispatch
}: ControlGrayscaleProps) {
  return (
    <>
      <Styled.ControlLabel htmlFor="grayscale">Grayscale?</Styled.ControlLabel>
      <Styled.ControlsRow>
        <input
          type="checkbox"
          id="grayscale"
          checked={grayscale}
          onChange={(e) => {
            dispatch({
              type: ControlActionType.GRAYSCALE,
              payload: e.target.checked
            })
          }}
        />
      </Styled.ControlsRow>
    </>
  )
}
