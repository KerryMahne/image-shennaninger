import styled from 'styled-components'
import { Button } from '../button/button'

export const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ImageListContainer = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  gap: 16px;

  padding: 0 32px;
`

export const FetchButton = styled(Button)`
  margin: 1rem 0;
`

export const ErrorText = styled.div`
  color: var(--color-error);
  font-weight: 600;
`
