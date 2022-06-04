import { getImageWithFilters, getImageWithSize } from '../../helpers/image'

export enum ControlActionType {
  BLUR = 'BLUR',
  GRAYSCALE = 'GRAYSCALE',
  WIDTH = 'WIDTH',
  HEIGHT = 'HEIGHT',
}

export type ControlAction =
  | {
    type: ControlActionType.BLUR;
    payload: number;
  }
  | {
    type: ControlActionType.GRAYSCALE;
    payload: boolean;
  }
  | {
    type: ControlActionType.WIDTH;
    payload: number;
  }
  | {
    type: ControlActionType.HEIGHT;
    payload: number;
  };

interface ControlState {
  imageId: string;
  blur: number;
  grayscale: boolean;
  width: number;
  height: number;
  previewUrl: string;
}

interface GetInitialStateParams {
  width: number;
  height: number;
  imageId: string;
}
export function getInitialState ({
  width,
  height,
  imageId
}: GetInitialStateParams): ControlState {
  return {
    imageId,
    blur: 0,
    grayscale: false,
    width,
    height,
    previewUrl: getImageWithSize({ width, height, imageId })
  }
}

export const controlsReducer = (
  state: ControlState,
  action: ControlAction
): ControlState => {
  switch (action.type) {
    case ControlActionType.BLUR:
      return {
        ...state,
        blur: action.payload,
        previewUrl: getImageWithFilters({
          width: state.width,
          height: state.height,
          imageId: state.imageId,
          grayscale: state.grayscale,
          blur: action.payload
        })
      }
    case ControlActionType.WIDTH:
      return {
        ...state,
        width: action.payload,
        previewUrl: getImageWithFilters({
          height: state.height,
          imageId: state.imageId,
          grayscale: state.grayscale,
          blur: state.blur,
          width: action.payload
        })
      }
    case ControlActionType.HEIGHT:
      return {
        ...state,
        height: action.payload,
        previewUrl: getImageWithFilters({
          width: state.width,
          imageId: state.imageId,
          grayscale: state.grayscale,
          blur: state.blur,
          height: action.payload
        })
      }
    case ControlActionType.GRAYSCALE:
      return {
        ...state,
        grayscale: action.payload,
        previewUrl: getImageWithFilters({
          width: state.width,
          height: state.height,
          imageId: state.imageId,
          blur: state.blur,
          grayscale: action.payload
        })
      }
    default:
      throw new Error('Unsupported action')
  }
}
