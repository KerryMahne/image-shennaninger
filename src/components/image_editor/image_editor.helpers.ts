import { ImageControls } from './image_editor.interfaces'

// I could just pass the entire reducer, but that's dirty, although it saves a param
export function saveEditorData (imageId: string, controls: ImageControls): void {
  localStorage.setItem(
    imageId,
    JSON.stringify({
      width: controls.width,
      height: controls.height,
      blur: controls.blur,
      grayscale: controls.grayscale
    })
  )
}

function isDataControls (data: any): data is ImageControls {
  return (
    data !== null &&
    data.width !== undefined &&
    data.height !== undefined &&
    data.blur !== undefined &&
    data.grayscale !== undefined
  )
}

export function loadEditorData (imageId: string): ImageControls | null {
  const existingData = JSON.parse(localStorage.getItem(imageId) || '{}') // need fallback because JSON parse hates parsing null
  console.log('obstojecki', existingData)

  if (isDataControls(existingData)) {
    return existingData
  }

  return null
}
