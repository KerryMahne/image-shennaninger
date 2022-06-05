import { clampValue } from '../../image_editor.helpers'
import { useControlStore } from '../../image_editor.store'
import * as Styled from './controls.styled'

const MIN_IMAGE_BLUR = 0
const MAX_IMAGE_BLUR = 10

export function ControlBlur () {
  const { blur, changeBlur } = useControlStore()

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
            changeBlur(
              clampValue({
                value: Number(e.target.value),
                min: MIN_IMAGE_BLUR,
                max: MAX_IMAGE_BLUR
              })
            )
          }}
        />
      </Styled.ControlsRow>
    </>
  )
}
