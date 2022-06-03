import { ImageList } from '../../components/image_list/image_list'
import { MainLayout } from '../../layouts/main_layout'

export function Home () {
  return (
    <MainLayout>
      Welcome home!
      <ImageList />
    </MainLayout>
  )
}
