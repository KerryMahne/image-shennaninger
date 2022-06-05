import { Dispatch } from 'react'
import { ControlAction } from './controls.reducer'

export interface ImageControls {
  blur: number;
  grayscale: boolean;
  width: number;
  height: number;
}

export type ControlsDispatch = Dispatch<ControlAction>;
