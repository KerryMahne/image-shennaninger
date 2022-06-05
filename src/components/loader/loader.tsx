import * as Styled from './loader.styled'

interface LoaderProps {
  size: number;
  color: string;
}

export function Loader ({ size, color }: LoaderProps) {
  return (
    <Styled.Loader size={size} color={color}>
      <svg className="advanced-loader-svg" viewBox="22 22 44 44">
        <circle
          className="advanced-loader-circle"
          cx="44"
          cy="44"
          r="20.2"
          fill="none"
          strokeWidth={4}
        ></circle>
      </svg>
    </Styled.Loader>
  )
}
