import { ImageList } from '../../components/image_list/image_list'
import { MainLayout } from '../../layouts/main_layout'
import * as Styled from './home.styled'

export function Home () {
  return (
    <MainLayout>
      <Styled.HomeTitle>Welcome to the image gallery!</Styled.HomeTitle>
      <Styled.HomeDescription>
        Scroll through the images, find one you like and click on it. Then edit
        it as you wish and download it. As simple as that!
      </Styled.HomeDescription>
      <ImageList />
    </MainLayout>
  )
}
