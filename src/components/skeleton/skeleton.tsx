import * as Styled from './skeleton.styled'
interface SkeletonProps {
  className?: string;
}

export function Skeleton ({ className }: SkeletonProps) {
  return <Styled.SkeletonContainer className={className} />
}
