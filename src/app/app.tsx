import { GlobalTheme } from '../theme/global_theme'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ROUTES } from '../constants/routes'
import { ImageEdit } from '../routes/image_edit/image_edit'
import { Home } from '../routes/home/home'
import { QueryClientProvider } from 'react-query'
import { queryClient } from '../services/query_client'

function App () {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.IMAGE_EDIT} element={<ImageEdit />} />
        </Routes>
        <GlobalTheme />
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
