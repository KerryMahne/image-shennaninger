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

  display: flex;
  justify-content: center;
`

export const Image = styled.img`
  object-fit: cover;
  max-width: 100%;
`

export const ControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-top: 1rem;
`

export const ControlsRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: 0.5rem;
`

export const ControlLabel = styled.label`
  font-size: 1rem;
  line-height: 1.25rem;

  color: var(--color-text-secondary);
  margin-right: 0.5rem;
`
