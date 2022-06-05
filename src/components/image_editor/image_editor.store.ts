import create, { StoreApi } from 'zustand'
import createContext from 'zustand/context'
import { persist } from 'zustand/middleware'
import { Image } from '../../services/interfaces'
import { ImageControls } from './image_editor.interfaces'

export interface ControlStore extends ImageControls {
  image: Image;
  changeWidth: (width: number) => void;
  changeHeight: (height: number) => void;
  changeBlur: (blur: number) => void;
  changeGrayscale: (grayscale: boolean) => void;
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
        changeWidth: (width) =>
          set((state) => ({
            imageUpdating: width !== state.width,
            width
          })),
        changeHeight: (height) =>
          set((state) => ({
            height,
            imageUpdating: height !== state.height
          })),
        changeBlur: (blur) =>
          set((state) => ({
            imageUpdating: blur !== state.blur,
            blur
          })),
        changeGrayscale: (grayscale) =>
          set((state) => ({
            imageUpdating: grayscale !== state.grayscale,
            grayscale
          }))
      }),
      {
        name: `image-editor-${image.id}`
      }
    )
  )
}

export const ControlProvider = Provider
export const useControlStore = useStore
