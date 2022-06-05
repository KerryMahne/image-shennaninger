import * as Styled from './image_editor_skeleton.styled'

export function ImageEditorSkeleton () {
  return (
    <Styled.SkeletonContainer>
      <Styled.SkeletonImage />
      <Styled.SkeletonControls>
        <Styled.SkeletonLabel />
        <Styled.SkeletonControlsRow />
        <Styled.SkeletonLabel />
        <Styled.SkeletonControlsRow />
        <Styled.SkeletonLabel />
        <Styled.SkeletonControlsRow />
        <Styled.SkeletonLabel />
        <Styled.SkeletonControlsRow />
      </Styled.SkeletonControls>
    </Styled.SkeletonContainer>
  )
}
