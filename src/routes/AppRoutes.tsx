import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from '../components/layout/DefaulltLayout'
import { About } from '../pages/About'
import { Home } from '../pages/Home'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
      <Route path="*" element={<></>} />
    </Routes>
  )
}
