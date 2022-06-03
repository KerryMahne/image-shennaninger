import styled from 'styled-components'

export const ImageEditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ImageContainer = styled.div`
  width: 80vw;
  max-height: 70vh;
  overflow: auto;
`

export const Image = styled.img`
  object-fit: cover;
  max-width: 100%;
`
