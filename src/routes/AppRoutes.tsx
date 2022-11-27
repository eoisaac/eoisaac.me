import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from '../components/layout/DefaulltLayout'
import { Home } from '../pages/Home'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="*" element={<></>} />
    </Routes>
  )
}
