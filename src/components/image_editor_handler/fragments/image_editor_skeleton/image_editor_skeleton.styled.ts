import styled from 'styled-components'
import { Skeleton } from '../../../skeleton/skeleton'

export const SkeletonContainer = styled.div`
  width: 100%;

  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-bottom: 64px;
`

export const SkeletonImage = styled(Skeleton)`
  width: 80vw;
  height: 70vh;

  margin-bottom: 1rem;
`

export const SkeletonControls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const SkeletonControlsRow = styled(Skeleton)`
  width: 100px;
  height: 20px;

  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: 0.5rem;
`

export const SkeletonLabel = styled(Skeleton)`
  width: 60px;
  height: 1.25rem;

  margin-bottom: 0.5rem;
`
