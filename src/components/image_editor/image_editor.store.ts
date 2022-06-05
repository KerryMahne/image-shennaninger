import create, { StoreApi } from 'zustand'
import createContext from 'zustand/context'
import { persist } from 'zustand/middleware'
import { getImageWithFilters, getImageWithSize } from '../../helpers/image'
import { Image } from '../../services/interfaces'
import { ImageControls } from './image_editor.interfaces'

export interface ControlStore extends ImageControls {
  image: Image;
  imageUpdating: boolean;
  previewUrl: string;
  changeWidth: (width: number) => void;
  changeHeight: (height: number) => void;
  changeBlur: (blur: number) => void;
  changeGrayscale: (grayscale: boolean) => void;
  imageUpdated: () => void;
}

const { Provider, useStore } = createContext<StoreApi<ControlStore>>()

export function createControlStore (image: Image) {
  return create<ControlStore>()(
    persist(
      (set) => ({
        image,
        blur: 0,
        grayscale: false,
        width: image.width,
        height: image.height,
        imageUpdating: false,
        previewUrl: getImageWithSize({
          width: image.width,
          height: image.height,
          imageId: image.id
        }),
        changeWidth: (width) =>
          set((state) => ({
            imageUpdating: width !== state.width,
            width,
            previewUrl: getImageWithFilters({
              width,
              imageId: state.image.id,
              grayscale: state.grayscale,
              blur: state.blur,
              height: state.height
            })
          })),
        changeHeight: (height) =>
          set((state) => ({
            height,
            imageUpdating: height !== state.height,
            previewUrl: getImageWithFilters({
              height,
              imageId: state.image.id,
              grayscale: state.grayscale,
              blur: state.blur,
              width: state.width
            })
          })),
        changeBlur: (blur) =>
          set((state) => ({
            imageUpdating: blur !== state.blur,
            blur,
            previewUrl: getImageWithFilters({
              blur,
              imageId: state.image.id,
              grayscale: state.grayscale,
              height: state.height,
              width: state.width
            })
          })),
        changeGrayscale: (grayscale) =>
          set((state) => ({
            imageUpdating: grayscale !== state.grayscale,
            grayscale,
            previewUrl: getImageWithFilters({
              grayscale,
              imageId: state.image.id,
              blur: state.blur,
              height: state.height,
              width: state.width
            })
          })),
        imageUpdated: () => set({ imageUpdating: false })
      }),
      {
        name: `image-editor-${image.id}`
      }
    )
  )
}

export const ControlProvider = Provider
export const useControlStore = useStore
