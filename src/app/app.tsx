import '../App.css'
import { GlobalTheme } from '../theme/global_theme'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ROUTES } from '../constants/routes'
import { ImageEdit } from '../routes/image-edit'
import { Home } from '../routes/home'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.IMAGE_EDIT} element={<ImageEdit />} />
      </Routes>
      <GlobalTheme />
    </BrowserRouter>
  )
}

export default App
