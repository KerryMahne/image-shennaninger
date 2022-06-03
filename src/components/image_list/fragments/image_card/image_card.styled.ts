import styled from 'styled-components'

export const ImageContainer = styled.div`
  height: 300px;
  width: 250px;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 5px;

  background-color: var(--color-background-secondary);

  overflow: hidden;
`

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 230px;
`
