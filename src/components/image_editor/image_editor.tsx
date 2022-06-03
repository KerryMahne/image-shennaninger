import { useGetImage } from '../../services/get_image/use_get_image'
import { RemoteDataType } from '../../services/interfaces'
import * as Styled from './image_editor.styled'

interface ImageEditorProps {
  imageId: string;
}

export function ImageEditor ({ imageId }: ImageEditorProps) {
  const { data } = useGetImage(imageId)

  function getContent () {
    switch (data.type) {
      case RemoteDataType.ERROR:
        return <div>Something went wrong :(</div>
      case RemoteDataType.LOADING:
        return <div>Loading...</div>
      case RemoteDataType.SUCCESS:
        return (
          <>
            <Styled.ImageContainer>
              <Styled.Image src={data.data.url} />
            </Styled.ImageContainer>
          </>
        )
      case RemoteDataType.EMPTY:
        return <div>No image received</div>
      default:
        return null
    }
  }

  return (
    <Styled.ImageEditorContainer>{getContent()}</Styled.ImageEditorContainer>
  )
}
