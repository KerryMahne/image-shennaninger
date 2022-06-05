import { clampValue } from '../../image_editor.helpers'
import { useControlStore } from '../../image_editor.store'
import * as Styled from './controls.styled'

const MIN_IMAGE_WIDTH = 1

export function ControlWidth () {
  const {
    image: { width: nativeWidth },
    width,
    changeWidth
  } = useControlStore()
  return (
    <>
      <Styled.ControlLabel htmlFor="width">Width</Styled.ControlLabel>
      <Styled.ControlsRow>
        <input
          type="number"
          id="width"
          value={width}
          max={nativeWidth}
          min={MIN_IMAGE_WIDTH}
          onChange={(e) => {
            changeWidth(
              clampValue({
                value: Number(e.target.value),
                min: MIN_IMAGE_WIDTH,
                max: nativeWidth
              })
            )
          }}
        />
      </Styled.ControlsRow>
    </>
  )
}
