import styled from 'styled-components'

export const Loader = styled.div<{ size: number; color: string }>`
  ${({ color, size }) => `
  position: relative;

  width: ${size * 0.1}rem;
  height: ${size * 0.1}rem;

  color: ${color};

  animation: advanced-loader-keyframes-circular-rotate 1.4s linear infinite;

  .advanced-loader-svg {
    display: block;
  }

  .advanced-loader-circle {
    stroke: currentColor;
    animation: advanced-loader-keyframes-circular-dash 1.4s ease-in-out infinite;
    stroke-dasharray: 80px, 200px;
    stroke-dashoffset: 0px;
  }

  @keyframes advanced-loader-keyframes-circular-rotate {
    0% {
      transform-origin: 50% 50%;
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes advanced-loader-keyframes-circular-dash {
    0% {
      stroke-dasharray: 1px, 200px;
      stroke-dashoffset: 0px;
    }
    50% {
      stroke-dasharray: 100px, 200px;
      stroke-dashoffset: -15px;
    }
    100% {
      stroke-dasharray: 100px, 200px;
      stroke-dashoffset: -125px;
    }
  }
`}
`
