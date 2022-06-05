import styled from 'styled-components'
import { ImageControls } from '../../image_editor.interfaces'

export const Image = styled.img<ImageControls>`
  ${({ width, height, grayscale, blur }) => `
  object-fit: cover;
  object-position: 0 0;

  width: ${width}px;
  height: ${height}px;
  filter: grayscale(${grayscale ? 1 : 0}) blur(${blur}px);
`}
`
