import { clampValue } from '../../image_editor.helpers'
import { useControlStore } from '../../image_editor.store'
import * as Styled from './controls.styled'

const MIN_IMAGE_HEIGHT = 1

export function ControlHeight () {
  const {
    image: { height: nativeHeight },
    height,
    changeHeight
  } = useControlStore()
  return (
    <>
      <Styled.ControlLabel htmlFor="height">Height</Styled.ControlLabel>
      <Styled.ControlsRow>
        <input
          type="number"
          id="height"
          value={height}
          max={nativeHeight}
          min={MIN_IMAGE_HEIGHT}
          onChange={(e) => {
            changeHeight(
              clampValue({
                value: Number(e.target.value),
                min: MIN_IMAGE_HEIGHT,
                max: nativeHeight
              })
            )
          }}
        />
      </Styled.ControlsRow>
    </>
  )
}
