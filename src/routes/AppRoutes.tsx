import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from '../components/layouts/DefaultLayout'
import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
