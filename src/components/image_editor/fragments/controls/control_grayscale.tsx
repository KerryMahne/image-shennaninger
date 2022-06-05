import { useControlStore } from '../../image_editor.store'
import * as Styled from './controls.styled'

export function ControlGrayscale () {
  const { grayscale, changeGrayscale } = useControlStore()

  return (
    <>
      <Styled.ControlLabel htmlFor="grayscale">Grayscale?</Styled.ControlLabel>
      <Styled.ControlsRow>
        <input
          type="checkbox"
          id="grayscale"
          checked={grayscale}
          onChange={(e) => {
            changeGrayscale(e.target.checked)
          }}
        />
      </Styled.ControlsRow>
    </>
  )
}
