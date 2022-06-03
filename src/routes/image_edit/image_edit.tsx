import { useParams } from 'react-router-dom'
import { ImageEditor } from '../../components/image_editor/image_editor'
import { ImageEditRouteParams } from '../../constants/routes'
import { MainLayout } from '../../layouts/main_layout'

const areParamsValid = (params: any): params is ImageEditRouteParams => {
  return typeof params === 'object' && typeof params.imageId === 'string'
}

export function ImageEdit () {
  const params = useParams<ImageEditRouteParams>()

  // a small typeguard just because why not and because you can't type routes properly
  if (areParamsValid(params)) {
    return (
      <MainLayout>
        Welcome to image edit!
        <ImageEditor imageId={params.imageId} />
      </MainLayout>
    )
  }

  return null
}
