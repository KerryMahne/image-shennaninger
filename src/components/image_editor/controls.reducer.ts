import { getImageWithFilters, getImageWithSize } from '../../helpers/image'
import { loadEditorData } from './image_editor.helpers'
import { ImageControls } from './image_editor.interfaces'

export enum ControlActionType {
  BLUR = 'BLUR',
  GRAYSCALE = 'GRAYSCALE',
  WIDTH = 'WIDTH',
  HEIGHT = 'HEIGHT',
  IMAGE_UPDATED = 'IMAGE_UPDATED',
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
  }
  | {
    type: ControlActionType.IMAGE_UPDATED;
  };

export interface ControlState extends ImageControls {
  imageId: string;
  imageUpdating: boolean;
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
  const initialControls = loadEditorData(imageId)

  if (initialControls !== null) {
    return {
      imageId,
      imageUpdating: false,
      ...initialControls,
      previewUrl: getImageWithFilters({
        imageId,
        width: initialControls.width,
        grayscale: initialControls.grayscale,
        blur: initialControls.blur,
        height: initialControls.height
      })
    }
  }

  return {
    imageId,
    blur: 0,
    grayscale: false,
    width,
    height,
    imageUpdating: false,
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
        imageUpdating: action.payload !== state.blur,
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
        imageUpdating: action.payload !== state.width,
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
        imageUpdating: action.payload !== state.height,
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
        imageUpdating: action.payload !== state.grayscale,
        grayscale: action.payload,
        previewUrl: getImageWithFilters({
          width: state.width,
          height: state.height,
          imageId: state.imageId,
          blur: state.blur,
          grayscale: action.payload
        })
      }
    case ControlActionType.IMAGE_UPDATED:
      return {
        ...state,
        imageUpdating: false
      }
    default:
      throw new Error('Unsupported action')
  }
}
