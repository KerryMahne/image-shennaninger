import { useGetImage } from '../../services/get_image/use_get_image'
import { RemoteDataType } from '../../services/interfaces'
import { ImageEditor } from '../image_editor/image_editor'
import * as Styled from './image_editor_handler.styled'

interface ImageEditorHandlerProps {
  imageId: string;
}

export function ImageEditorHandler ({ imageId }: ImageEditorHandlerProps) {
  const { data } = useGetImage(imageId)

  function getContent () {
    switch (data.type) {
      case RemoteDataType.ERROR:
        return <div>Something went wrong :(</div>
      case RemoteDataType.LOADING:
        return <div>Loading...</div>
      case RemoteDataType.SUCCESS:
        return <ImageEditor image={data.data} />
      case RemoteDataType.EMPTY:
        return <div>No image received</div>
      default:
        return null
    }
  }

  return <Styled.HandlerContainer>{getContent()}</Styled.HandlerContainer>
}
